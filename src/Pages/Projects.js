import React from "react";
import Project from "../Components/Project";
import ProjectPic1 from "../Assets/Roots.png";
import ProjectPic2 from "../Assets/Yoda-Me-Astrology.png";
import ProjectPic3 from "../Assets/Employee-Directory.png";
import ProjectPic4 from "../Assets/Work-Day-Scheduler.png";
import ProjectPic5 from "../Assets/Password-Generator.png";
import ProjectPic6 from "../Assets/Code-Quiz.png";


function Projects() {
    return(
        <div>
            <h2>Projects</h2>
            <Project 
                imgSrc={ProjectPic1}
                projectTitle="Roots"
                projectDescription="This is an app that allows users to sign in and communicate on a forum in different languages."
                appLink="https://our-roots.herokuapp.com/"
                repoLink="https://github.com/cadeburkett/Roots"
            />
            <Project 
                imgSrc={ProjectPic2}
                projectTitle="Yoda-Me-Astrology"
                projectDescription="This is an app that displays the user's horoscopes in Yoda venacular."
                appLink="https://cadeburkett.github.io/Yoda_me_astrology/"
                repoLink="https://github.com/cadeburkett/Yoda_me_astrology"
            />
            <Project 
                imgSrc={ProjectPic3}
                projectTitle="Employee Directory"
                projectDescription="This is an app that displays all employees and allows the user to search by or sort last name."
                appLink="https://peaceful-dusk-77958.herokuapp.com/"
                repoLink="https://github.com/cadeburkett/Employee-Directory"
            />
            <Project 
                imgSrc={ProjectPic4}
                projectTitle="Work Day Scheduler"
                projectDescription="This is an app that allows the user to schedule tasks for their workday."
                appLink="https://cadeburkett.github.io/05-WorkDayScheduler-Homework/"
                repoLink="https://github.com/cadeburkett/05-WorkDayScheduler-Homework"
            />
            <Project 
                imgSrc={ProjectPic5}
                projectTitle="Password Generator"
                projectDescription="This is an app that allows the user to gnerate a unique password."
                appLink="https://cadeburkett.github.io/03-JavaScript-PasswordGenerator/"
                repoLink="https://github.com/cadeburkett/03-JavaScript-PasswordGenerator"
            />
            <Project 
                imgSrc={ProjectPic6}
                projectTitle="Code Quiz"
                projectDescription="This is an app that provides a multiple choice quiz for coders with a timer and highscores page."
                appLink="https://cadeburkett.github.io/04-Code-Quiz-/"
                repoLink="https://github.com/cadeburkett/04-Code-Quiz-"
            />
        </div>
    )
}

export default Projects