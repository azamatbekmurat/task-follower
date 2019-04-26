import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum, ante lacinia consectetur interdum, leo mi mattis nisl, ac
            tempor lorem mauris eu augue.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by AB</div>
          <div>26th April, 1pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
