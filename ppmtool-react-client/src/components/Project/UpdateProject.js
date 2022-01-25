import React, { Component } from "react";
import { getProject, createProject } from "../../actions/projectActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { motion } from "framer-motion";

class UpdateProject extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const {
      id,
      projectName,
      projectIdentifier,
      description,
      start_date,
      end_date,
    } = nextProps.project;

    this.setState({
      id,
      projectName,
      projectIdentifier,
      description,
      start_date,
      end_date,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const updateProject = {
      id: this.state.id,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };
    this.props.createProject(updateProject, this.props.history);
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
                <hr style={{ color: "#fff" }} />
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
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                  </div>
                  <div
                    className="form-group"
                    style={{ "margin-bottom": "20px" }}
                  >
                    <input
                      type="text"
                      className={classnames(
                        "form-control form-control-lg disabled"
                      )}
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
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
                      value={this.state.description}
                      onChange={this.onChange}
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
                      value={this.state.start_date}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6 style={{ color: "#fff" }}>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg ")}
                      name="end_date"
                      value={this.state.end_date}
                      onChange={this.onChange}
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
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps, { getProject, createProject })(
  UpdateProject
);
