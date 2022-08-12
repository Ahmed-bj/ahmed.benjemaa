/**
 * @Author: Ahmed BEN JEMAA
 * @Date:   2022-07-22 18:55:09
 * @Last Modified by:   Ahmed BEN JEMAA
 * @Last Modified time: 2022-08-11 19:58:42
 */
import React, { useState } from "react";
import Skill from "./Skill";

const SkillsList = () => {
  const [skills] = useState([
    { name: "React Js", level: 4 },
    { name: "Spring Boot", level: 4 },
    { name: "Express JS", level: 4 },
    { name: "Nest Js", level: 3 },
    { name: "Jenkins", level: 3 },
    { name: "Docker", level: 3 }
  ]);
  return (
    <div>
      {skills.map(skill => (
        <Skill name={skill.name} level={skill.level} key={skill.index} />
      ))}
    </div>
  );
};
export default SkillsList;
