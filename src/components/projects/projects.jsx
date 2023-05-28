import React from "react";
import classes from './project.module.css'
import {portfolioData} from "../../data/data";

const Projects = () => {
    const portfolio = portfolioData
    return (
        <div className={classes.container} id="scrollspyProject">
            <h1 className={classes.title}>Проекты</h1>
            {portfolio.map(({title, description, url, techs, image, urlGitHubImg, ghPages}) => (
                <div key={url} className={classes.projects}>
                    <img src={image} alt={title} className={classes.imgProject}/>
                    <div className={classes.textProject}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <hr/>
                        <p>{techs}</p>
                        <div>

                        </div>
                        <div>
                            <a href={ghPages} target="_blank" className={classes.ghPages}>{ghPages === ''? '' : 'GhPages'}</a>
                            <a href={url} target="_blank"><img src={urlGitHubImg}
                                                               alt="github"
                                                               title='Проект на GitHub'
                                                               className={classes.imgGit}/></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Projects