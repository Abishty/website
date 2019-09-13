import React from "react";
import "../assets/css/base.css";
import "../assets/css/main.css";
import "../assets/css/vendor.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <div class="row">
            <div class="col-six tab-full pull-right social">
              <ul class="footer-social">
                <li>
                  <a href="#facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#linkedin">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#github">
                    <i class="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-six tab-full">
              <div class="copyright">
                <span>© Copyright Kards 2016.</span>
                <span>
                  Design by <a href="http://www.styleshout.com/">styleshout</a>
                </span>
              </div>
            </div>

            <div id="go-top">
              <a class="smoothscroll" title="Back to Top" href="#top">
                <i class="fa fa-long-arrow-up"></i>
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
