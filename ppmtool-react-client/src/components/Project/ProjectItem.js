import React, { Component } from "react";
import { DashBtnLink, DashDelBtnLink } from "../Layout/HeaderElements";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../actions/projectActions";
class ProjectItem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteProject(id);
  };

  render() {
    var { project } = this.props;
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
            <DashBtnLink to={`/projectBoard/${project.projectIdentifier}`}>
              Project Board
            </DashBtnLink>
            <DashBtnLink to={`/updateProject/${project.projectIdentifier}`}>
              Update Project
            </DashBtnLink>
            <DashDelBtnLink
              onClick={this.onDeleteClick.bind(this, project.projectIdentifier)}
            >
              Delete Project
            </DashDelBtnLink>
          </div>
        </div>
        <hr style={{ color: "#e4e6eb" }} />
      </div>
    );
  }
}

ProjectItem.propTypes = {
  deleteProject: PropTypes.func.isRequired,
};

export default connect(null, { deleteProject })(ProjectItem);
