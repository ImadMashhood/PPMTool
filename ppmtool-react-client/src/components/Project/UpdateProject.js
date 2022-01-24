import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProject } from "../../actions/projectActions";
import classnames from "classnames";
import { motion } from "framer-motion";

class UpdateProject extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }
  render() {
    return (
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      >
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Update Project Form</h5>
                <hr />
                <form className="form-main" onSubmit={this.onSubmit}>
                  <div
                    className="form-group"
                    style={{ "margin-bottom": "20px" }}
                  >
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ")}
                      placeholder="Project Name"
                      name="projectName"
                    />
                  </div>
                  <div
                    className="form-group"
                    style={{ "margin-bottom": "20px" }}
                  >
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ")}
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                    />
                  </div>
                  <div
                    className="form-group"
                    style={{ "margin-bottom": "20px" }}
                  >
                    <textarea
                      className={classnames("form-control form-control-lg ")}
                      placeholder="Project Description"
                      name="description"
                    ></textarea>
                  </div>
                  <h6 style={{ color: "#fff" }}>Start Date</h6>
                  <div
                    className="form-group"
                    style={{ "margin-bottom": "20px" }}
                  >
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg ")}
                      name="start_date"
                    />
                  </div>
                  <h6 style={{ color: "#fff" }}>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg ")}
                      name="end_date"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn-primary"
                    style={{ "margin-bottom": "20px" }}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps, { getProject })(UpdateProject);
