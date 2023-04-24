import React from "react";
import classes from "./skills.module.css"
import {skillsData} from "../../data/data";

const Skills = () => {
    const skills = skillsData
    return (
        <div>
            <h1 className={classes.title}>Навыки</h1>
            <div className={classes.skillsContainer}>
            {skills.map(({title, image}) => (
                <div className={classes.imgWrapper}>
                    <img src={image} alt={title} className={classes.img}/>
                    <p>{title}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Skills