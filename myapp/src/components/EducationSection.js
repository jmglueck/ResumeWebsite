import React from "react";
import * as websiteData from '../websiteData.json';


const EducationSection = () => {
    return (
        <div className="section-holder">
            <h1>
                education
            </h1>
            <p>
                {websiteData.education.degree}
            </p>
            <p>
                {websiteData.education.university}
            </p>
            <p>
                {websiteData.education.timeSpent}
            </p>
            <p>
                {websiteData.education.gpa} GPA
            </p>
        </div>
    )

}

export default EducationSection;