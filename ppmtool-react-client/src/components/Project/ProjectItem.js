import React, { Component } from "react";
import { Nav, NavMenu, DashBtn, DashBtnLink } from "../Layout/HeaderElements";

class ProjectItem extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="container">
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{project.projectIdentifier}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{project.projectName}</h3>
              <p>{project.description}</p>
            </div>
          </div>
          <div className="dash-board-button">
            <DashBtnLink to="/projectBoard">Project Board</DashBtnLink>
            <DashBtnLink to="/updateBoard">Update Project</DashBtnLink>
            <DashBtnLink to="/updateBoard">Delete Project</DashBtnLink>
          </div>
        </div>
        <hr style={{ color: "#fff" }} />
      </div>
    );
  }
}

export default ProjectItem;
