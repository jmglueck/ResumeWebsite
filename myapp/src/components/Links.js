import React from "react";
import * as websiteData from '../websiteData.json';


const Links = () => {
    return (
        <div>
            {
                Object.entries(websiteData.links).map(([type, link]) => {
                    return <a href={link[1]} className="App-link">{link[0]}</a>
                })
            }
        </div>
    )
}

export default Links;