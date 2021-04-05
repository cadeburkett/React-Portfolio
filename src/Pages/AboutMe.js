import React from "react";
import ProfilePic from "../Assets/ProfilePic.png";

function AboutMe() {
    return (
        <div className="row">
            <h2>About Me</h2>
            <img className="img-thumbnail"
                src={ProfilePic}
                alt="ProfilePic"
                width="350px"
                height="300px"
            />
            <div>
                <p>
                    I am a coding student learning to be a full stack web developer.
                </p>
                <p>
                    I am learning to code through UC Berkeley's Full Stack Web Development Extension program, while maintaining a
                    full-time job, which demonstrates my organization and ability to multitask and juggle priorities. I have
                    developed technical skills in HTML, CSS, Javascript, and Node.js. My team and I sucessfully created an app that calls
                    on APIs to read horoscopes with Yoda's venacular. As an employee I am a strong leader, a persuasive
                    communicator, and a creative problemsolver and I look forward to applying my skill sets to my future
                    endeavours. 
                </p>
            </div>
        </div>
    )
}

export default AboutMe