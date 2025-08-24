/*
This code creates a global context called AppContext to share data across components in a React app.
AppContextProvider wraps child components and passes shared values using AppContext.Provider.
*/

/* props are how components talk to each other by passing data.
They are like arguments to functions, but for components.
*/

import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration"
import {useAuth,useUser} from "@clerk/clerk-react"

export const AppContext=createContext()

export const AppContextProvider=(props)=>{

    const currency=import.meta.env.VITE_CURRENCY

    const navigate=useNavigate()

    const {getToken}=useAuth()
    const {user}=useUser()

    const [allCourses,setAllCourses]=useState([])
    const [isEducator,setisEducator]=useState(true)
    const [enrolledCourses,setEnrolledCourses]=useState([])

    
    const fetchAllCourses=async()=>{
        setAllCourses(dummyCourses)
    }

    const calculateRating=(course)=>{
        if(course.courseRatings.length===0)
        {
            return 0;
        }
        let totalRating=0
        course.courseRatings.forEach(rating=>{
            totalRating+=rating.rating
        })
        return totalRating / course.courseRatings.length
    }

    // Function to calculate course chapter time
    const calculateChapterTime=(chapter)=>{
        let time=0
        chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration)
        return humanizeDuration(time*60*1000,{units:["h","m"]})
    }

    // Function to calculate course duration
    const calculateCourseDuration=(course)=>{
        let time=0
        course.courseContent.map((chapter)=>chapter.chapterContent.map(
            (lecture)=>time+=lecture.lectureDuration
        ))
        return humanizeDuration(time*60*1000,{units:["h","m"]})
    }

    // Function to calculate total no. of lectures in the course
    const calculateNoOfLectures =(course)=>{
        let totalLectures=0;
        course.courseContent.forEach(chapter=>{
            if(Array.isArray(chapter.chapterContent)){
                totalLectures+=chapter.chapterContent.length;
            }
        })
        return totalLectures;
    }

    // Fetch user enrolled courses
    const fetchUserEnrolledCourses=async()=>{
        setEnrolledCourses(dummyCourses)
    }

    useEffect(()=>{
        fetchAllCourses(),
        fetchUserEnrolledCourses()
    },[])

    const logToken=async()=>{
        console.log(await getToken())
    }

    useEffect(()=>{
        if(user){
            logToken()
        }
    },[user])
    
    const value={
        currency,allCourses,navigate,calculateRating,isEducator,setisEducator,calculateChapterTime,calculateCourseDuration,calculateNoOfLectures,enrolledCourses,fetchUserEnrolledCourses
    }
    return(
        <AppContext.Provider value={value}>
        {props.children}
        </AppContext.Provider>
    )
}