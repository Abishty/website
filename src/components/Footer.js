import React from "react";
import "../assets/css/base.css";
import "../assets/css/main.css";
import "../assets/css/vendor.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <div className="row">
            <div className="col-six tab-full pull-right social">
              <ul className="footer-social">
                <li>
                  <a href="#facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#github">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-six tab-full">
              <div className="copyright">
                <span>© Copyright Kards 2016.</span>
                <span>
                  Design by <a href="http://www.styleshout.com/">styleshout</a>
                </span>
              </div>
            </div>

            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top">
                <i className="fa fa-long-arrow-up"></i>
              </a>
            </div>
          </div>
          {/* <!-- /row -->     	 */}
        </footer>
      </div>
    );
  }
}

export default Footer;
