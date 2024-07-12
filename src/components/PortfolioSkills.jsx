import React from "react";

import skill1 from "../assets/skills1.svg";
import skill2 from "../assets/skills2.svg";
import skill3 from "../assets/skill3.svg";
import skill4 from "../assets/skill4.svg";
import skill5 from "../assets/skill5.svg";
import skill6 from "../assets/skill6.svg";
import skill7 from "../assets/skill7.svg";
import skill8 from "../assets/skill8.svg";
import skill9 from "../assets/skill9.svg";
// List of skills with their respective logos
const skills = [
  { name: "HTML", logo: skill1 },
  { name: "CSS", logo: skill2 },
  { name: "JavaScript", logo: skill3 },
  { name: "React", logo: skill4 },
  { name: "React Native", logo: skill5 },
  { name: "GitHub", logo: skill6 },
  { name: "Frontend Design System", logo: skill7 },
  { name: "Ant Design", logo: skill9 },
  { name: "Tailwind CSS", logo: skill8 },
];

const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center m-4">
    <img src={skill.logo} alt={`${skill.name} logo`} className="w-16 h-16" />
    <p className="mt-2 text-lg font-semibold">{skill.name}</p>
  </div>
);

const PortfolioSkills = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Technologies I've Worked With
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-8 lg:px-24">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSkills;
