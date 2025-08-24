import React from "react";
import { GraduationCap, Briefcase, Paintbrush, Utensils, Dumbbell, Globe } from "lucide-react";

const Companies = () => {
  const learners = [
    { icon: <GraduationCap className="w-10 h-10 text-indigo-600" />, label: "Students" },
    { icon: <Briefcase className="w-10 h-10 text-blue-600" />, label: "Professionals" },
    { icon: <Paintbrush className="w-10 h-10 text-pink-600" />, label: "Artists" },
    { icon: <Utensils className="w-10 h-10 text-green-600" />, label: "Hobbyists" },
    { icon: <Dumbbell className="w-10 h-10 text-red-600" />, label: "Fitness Learners" },
    { icon: <Globe className="w-10 h-10 text-yellow-600" />, label: "Global Community" },
  ];

  return (
    <div className="pt-16">
      <p className="text-base text-gray-600 text-center">
        Trusted by learners from all walks of life
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 md:mt-10 mt-5">
        {learners.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            {item.icon}
            <span className="mt-2 text-sm font-medium text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;