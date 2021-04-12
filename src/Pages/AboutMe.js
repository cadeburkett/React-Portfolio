import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../Assets/ProfilePic.png";
import Pdf from "../Assets/Resume_Coding.pdf";

function AboutMe() {
    return (
        <div className= "row">  
            <div className="row" style={{margin: "8vw"}}>
                <div className="col-sm-4" style={{marginLeft: "5vw"}}>
                    <div className="card-body" style={{padding: "50px", marginLeft: "15px"}}>
                        <img className="img-thumbnail"
                            src={ProfilePic}
                            alt="ProfilePic"
                            width="350px"
                            height="300px"
                            />
                    </div>
            </div>
            <div className="col-sm-4">
                <div className="card info">
                    <div className="card-body" style={{padding: "20px", marginTop: "30px", paddingBottom: "50px"}}>
                        <h2 style={{paddingBottom: "5px"}}>About Me</h2>
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
                        <div>
                            <a href="https://github.com/cadeburkett">GitHub</a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/cade-burkett/">Linked-In</a>
                        </div>
                        <div>
                            <div className = "Resume">
                                <a href = {Pdf} target = "_blank">Download Pdf</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutMe