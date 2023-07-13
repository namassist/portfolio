"use client";
import React, { useState } from "react";

export const Card = ({ data }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleMouseEnter = (skill) => {
    setHoveredSkill(skill);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div
      key={data.name}
      className="w-[calc(50%_-_1rem)] md:w-[calc(25%_-_1.5rem)] border-primary border-2 rounded-lg px-6 py-4 flex justify-center items-center gap-4 mb-3 relative hover:bg-pink-700 cursor-pointer"
      onMouseEnter={() => handleMouseEnter(data)}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={`transition-all duration-300 ${
          hoveredSkill === data ? "scale-110 -translate-x-4" : "scale-100"
        }`}
      >
        {data.icons}
      </span>
      <div>
        <h5
          className={`text-lg font-semibold duration-300 transition-all ${
            hoveredSkill === data
              ? "-translate-y-2 -translate-x-4"
              : "translate-y-0"
          }`}
        >
          {data.name}
        </h5>
        <p
          className={`absolute -translate-y-3 duration-300 transition-all ${
            hoveredSkill === data
              ? "opacity-100 -translate-x-4"
              : "opacity-0 translate-x-4"
          }`}
        >
          {data.level}
        </p>
      </div>
    </div>
  );
};
