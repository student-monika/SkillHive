import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl max-auto'>Teach what you know, learn what you love <span className='text-blue-600'>on SkillHive.</span></h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>We believe everyone has something to teach. Skill Hive brings together a diverse community to share knowledge, support each other, and grow together.</p>
      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>We believe everyone has something to teach. Skill Hive brings together a diverse community to share knowledge, support each other, and grow together.</p>
      <SearchBar/>
    </div>
  )
}

export default Hero
