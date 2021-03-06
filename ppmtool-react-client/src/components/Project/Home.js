import React, { Component } from "react";
import ImgWorking from "../../images/workingLate.svg";
import { motion } from "framer-motion";
import { GetStarted } from "../Layout/DashboardElements";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class home extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
        >
          <div className="main">
            <div className="main-container">
              <div className="main-content">
                <h1>Boost You Productivity</h1>
                <p style={{ color: "#e4e6eb" }}>
                  Omega Project Manager helps manage your projects, efficiently,
                  effectively and consistently. Join the Omega team and see your
                  project work life balance change
                </p>
                <GetStarted to="/signup">Get Started</GetStarted>
              </div>
              <div className="main-img-container">
                <img src={ImgWorking} alt="Logo" id="main-img" />;
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }
}

home.propTypes = {
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps)(home);
