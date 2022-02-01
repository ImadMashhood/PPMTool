import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateProjectBtn } from "./Layout/DashboardElements";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;
    return (
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      >
        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <CreateProjectBtn to="/addProject">
                  Create Project
                </CreateProjectBtn>
                <hr style={{ color: "#e4e6eb" }} />
                {projects.map((project) => (
                  <ProjectItem key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
