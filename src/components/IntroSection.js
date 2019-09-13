import React from "react";
import "../assets/css/base.css";
import "../assets/css/main.css";
import "../assets/css/vendor.css";

class IntroSection extends React.Component {
  render() {
    return (
      <div>
        <section id="intro">
          <div class="intro-overlay"></div>

          <div class="intro-content">
            <div class="row">
              <div class="col-twelve">
                <h5>Hello, World.</h5>
                <h1>I'm Abhishek Bisht.</h1>

                <p class="intro-position">
                  <span>Front-end Developer</span>
                </p>

                <a class="button stroke smoothscroll" href="#about" title="">
                  More About Me
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /intro-content -->  */}

          <ul class="intro-social">
            <li>
              <a href="#facebook">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#github">
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#twitter">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#linkedin">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#instagram">
                <i class="fa fa-instagram"></i>
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
