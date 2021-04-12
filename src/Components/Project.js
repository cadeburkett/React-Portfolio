import React from "react";

function Project({imgSrc, projectTitle, projectDescription, appLink, repoLink}) {
    return(
        <div class="card border-dark mb-3" style={{maxWidth: "840px", marginLeft: "80px", padding: "15px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={imgSrc} alt="project-thumbnail" class="project-img-thumbnail card-img-top" style={{width: "200px", height: "150px"}}/> 
              </div>
              <div class="col-md-8">
                <div class="card-body" style={{marginLeft: "30px"}}>
                  <h3 class="card-title">{projectTitle}</h3>
                  <p class="card-text">{projectDescription}</p>
                  <a href={appLink}>Deployed Project </a>
                  <a href={repoLink}> Repository</a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Project