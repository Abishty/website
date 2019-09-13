import React from "react";
import "../assets/css/base.css";
import "../assets/css/main.css";
import "../assets/css/vendor.css";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <section id="resume" className="grey-section">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Resume</h5>
              <h1>More of my credentials.</h1>

              <p className="lead">
                Lorem ipsum Do commodo in proident enim in dolor cupidatat
                adipisicing dolore officia nisi aliqua incididunt Ut veniam
                lorem ipsum Consectetur ut in in eu do.
              </p>
            </div>
          </div>
          {/* <!-- /section-intro-->  */}

          <div className="row resume-timeline">
            <div className="col-twelve resume-header">
              <h2>Work Experience</h2>
            </div>
            {/* <!-- /resume-header --> */}

            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>Front-end Developer</h3>
                    <p>June 2019 - Present</p>
                  </div>

                  <div className="timeline-content">
                    <h4>So Delhi</h4>
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div>
                {/* <!-- /timeline-block --> */}

                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>Area Service Manager Intern</h3>
                    <p>Feb 2018 - Feb 2019</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Voltas Ltd.</h4>
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi incididunt.
                    </p>
                  </div>
                </div>
                {/* <!-- /timeline-block --> */}

                {/* <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div> */}

                  {/* <div className="timeline-header">
                    <h3>Web Designer</h3>
                    <p>May 2013 - June 2014</p>
                  </div> */}

                  {/* <div className="timeline-content">
                    <h4>Great Designs Studio</h4>
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi incididunt.
                    </p>
                  </div> */}
                {/* </div> */}
                {/* <!-- /timeline-block --> */}
              </div>
              {/* <!-- /timeline-wrap -->   			 */}
            </div>
            {/* <!-- /col-twelve --> */}
          </div>
          {/* <!-- /resume-timeline --> */}

          <div className="row resume-timeline">
            <div className="col-twelve resume-header">
              <h2>Education</h2>
            </div>
            {/* <!-- /resume-header --> */}

            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-briefcase"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>Btech Electronics</h3>
                    <p>2013-2017</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Maharaja Agrasen College (DU)</h4>
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div>
                {/* <!-- /timeline-block --> */}

                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-briefcase"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>12th Standard</h3>
                    <p>2012-2013</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Adarsh Vidya Bhawan School</h4>
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi incididunt.
                    </p>
                  </div>
                </div>
                {/* <!-- /timeline-block --> */}

                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-briefcase"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>10th Standard</h3>
                    <p>2010-2011</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Adarsh Vidya Bhawan School</h4>
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi incididunt.
                    </p>
                  </div>
                </div>
                {/* <!-- /timeline-block --> */}
              </div>
              {/* <!-- /timeline-wrap -->   			 */}
            </div>
            {/* <!-- /col-twelve --> */}
          </div>
          {/* <!-- /resume-timeline --> */}
        </section>
        {/* <!-- /features --> */}
      </div>
    );
  }
}

export default Resume;
