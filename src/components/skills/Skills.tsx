import { useState, useEffect } from "react";
import { SkillsProps } from "./Skills.types";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoggedIn(true);
  //     }, 500);
  //   }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1001);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill: any) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>

      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
