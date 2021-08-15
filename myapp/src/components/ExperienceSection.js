import React from "react";
import * as websiteData from '../websiteData.json';


const ExperienceSection = () => {
    return (
        <div className="section-holder">
            <h1>
                experience
            </h1>
            {
                (websiteData.experience).map((exp) => {
                    return (
                    <div>
                        <p>
                            {exp.title}
                        </p>
                        <p>
                            {exp.company}
                        </p>
                        <p>
                            {exp.timeSpent}
                        </p>
                        <ul>
                            {(exp.description).map((descriptLine) => {
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

export default ExperienceSection;