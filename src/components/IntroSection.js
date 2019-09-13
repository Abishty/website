import React from "react";
import "../assets/css/base.css";
import "../assets/css/main.css";
import "../assets/css/vendor.css";

class IntroSection extends React.Component {
  render() {
    return (
      <div>
        <section id="intro">
          <div className="intro-overlay"></div>

          <div className="intro-content">
            <div className="row">
              <div className="col-twelve">
                <h5>Hello, World.</h5>
                <h1>I'm Abhishek Bisht.</h1>

                <p className="intro-position">
                  <span>Front-end Developer</span>
                </p>

                <a className="button stroke smoothscroll" href="#about" title="">
                  More About Me
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /intro-content -->  */}

          <ul className="intro-social">
            <li>
              <a href="https://www.facebook.com/bishty1810" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Abishty" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Bishty1810" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abhishek-bisht-b13b7287/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/bishty1810/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
          {/* <!-- /intro-social -->      	 */}
        </section>
        {/* <!-- /intro --> */}
      </div>
    );
  }
}

export default IntroSection;
