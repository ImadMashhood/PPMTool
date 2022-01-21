import React, { Component } from "react";
import ImgWorking from "../../images/workingLate.svg";

class home extends Component {
  render() {
    return (
      <>
        <div className="main">
          <div className="main-container">
            <div className="main-content">
              <h1>Boost You Productivity</h1>
              <p>
                Omega Project Manager helps manage your projects, efficiently,
                effectively and consistently. Join the Omega team and see your
                project work life balance change
              </p>
              <div className="button main-btn">
                <a href="#">Get Started</a>
              </div>
            </div>
            <div className="main-img-container">
              <img src={ImgWorking} alt="Logo" id="main-img" />;
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default home;
