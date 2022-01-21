import React, { Component } from "react";
import { Nav, NavMenu, DashBtn, DashBtnLink } from "../Layout/HeaderElements";

class ProjectItem extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">REACT</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>Spring / React Project</h3>
              <p>Project to create a Kanban Board with Spring Boot and React</p>
            </div>
          </div>
          <div className="dash-board-button">
            <DashBtnLink to="/projectBoard">Project Board</DashBtnLink>
            <DashBtnLink to="/updateBoard">Update Project</DashBtnLink>
            <DashBtnLink to="/updateBoard">Delete Project</DashBtnLink>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
