import React from "react";
import * as websiteData from '../websiteData.json';


const ProjectSection = () => {
    return (
        <div className="section-holder">
            <h1>
                projects
            </h1>
            {
                (websiteData.projects).map((proj) => {
                    return (
                    <div>
                        <p style={
                            {fontWeight: 'bold'}}>
                            {proj.title}
                        </p>
                        <p>
                            {
                                (proj.technologies).map((tech, i) => {
                                    return (
                                        <span>
                                        {tech}{i < ((proj.technologies).length - 1) ? ", " : ""} 
                                        </span>
                                
                                )})
                            }
                        </p>
                        <ul>
                            {(proj.description).map((descriptLine) => {
                                return (
                                <li>
                                    {descriptLine}
                                </li>
                                )})}
                        </ul>
                    </div>
                    )
                })
            }
        </div>
    )

}

export default ProjectSection;