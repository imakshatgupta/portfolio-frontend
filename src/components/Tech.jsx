import React, { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import { motion } from "framer-motion";
import './Tech.scss';
// import {ReactTooltip} from "react-tooltip";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

const Tech = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = `*[_type == "skills"]`;
    client.fetch(skillsQuery).then((data) => setSkills(data));
  }, []);

  return (
    <motion.div className="app__skills-list">
      {skills.map((skill) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
          key={skill.name}
        >
          <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
            <img src={urlFor(skill.icon).url()} alt={skill.name} />
          </div>
          <p className="p-text">{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
