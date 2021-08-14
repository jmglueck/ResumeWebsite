import React from "react";
import * as websiteData from '../websiteData.json';


const TechnicalSkillsSection = () => {
    return (
        <div className="section-holder">
            
            {
                Object.entries(websiteData.technicalSkills).map(([type, skills]) => {
                    return (
                    <div>
                        <h1>
                            {type}
                        </h1>
                            <ul>
                                { 
                                    skills.map(skill => {
                                        return (
                                        <li>
                                            {skill}
                                        </li>
                                    )
                                    }) 
                                }
                            </ul>
                    </div>
                )})
            }
        </div>
    )
}

export default TechnicalSkillsSection;