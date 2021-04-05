import React from "react";

function Project({imgSrc, projectTitle, projectDescription, appLink, repoLink}) {
    return(
        <div class="card mb-3" style={{maxWidth: "840px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={imgSrc} alt="project-thumbnail" class="project-img-thumbnail card-img-top" style={{width: "200px", height: "150px"}}/> 
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h4 class="card-title">{projectTitle}</h4>
                  <p class="card-text">{projectDescription}</p>
                  <a href={appLink}>Deployed Project</a>
                  <a href={repoLink}>Repository</a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Project