import React from "react";
import "../assets/css/base.css";
import "../assets/css/main.css";
import "../assets/css/vendor.css";
import liberty from "../assets/images/portfolio/liberty.jpg";
import shutterbug from "../assets/images/portfolio/shutterbug.jpg";
import clouds from "../assets/images/portfolio/clouds.jpg";
import beetle from "../assets/images/portfolio/beetle.jpg";
import lighthouse from "../assets/images/portfolio/lighthouse.jpg";
import salad from "../assets/images/portfolio/salad.jpg";
import mliberty from "../assets/images/portfolio/modals/m-liberty.jpg";
import mbeetle from "../assets/images/portfolio/modals/m-beetle.jpg";
import mcloud from "../assets/images/portfolio/modals/m-clouds.jpg";
import mlighthouse from "../assets/images/portfolio/modals/m-lighthouse.jpg";
import msalad from "../assets/images/portfolio/modals/m-salad.jpg";
import mshutterbug from "../assets/images/portfolio/modals/m-shutterbug.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <section id="portfolio">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Portfolio</h5>
              <h1>Check Out Some of My Works.</h1>

              <p className="lead">
                Lorem ipsum Do commodo in proident enim in dolor cupidatat
                adipisicing dolore officia nisi aliqua incididunt Ut veniam
                lorem ipsum Consectetur ut in in eu do.
              </p>
            </div>
          </div>
          {/* <!-- /section-intro-->  */}

          <div className="row portfolio-content">
            <div className="col-twelve">
              {/* <!-- portfolio-wrapper --> */}
              <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
                <div className="bgrid folio-item">
                  <div className="item-wrap">
                    <img src={liberty} alt="Liberty" />
                    <a href="#modal-01" className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Liberty</h3>
                          <span className="folio-types">Graphic Design</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- /folio-item --> */}

                <div className="bgrid folio-item">
                  <div className="item-wrap">
                    <img src={shutterbug} alt="Shutterbug" />
                    <a href="#modal-02" className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Shutterbug</h3>
                          <span className="folio-types">Web Design</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- /folio-item --> */}

                <div className="bgrid folio-item">
                  <div className="item-wrap">
                    <img src={clouds} alt="Clouds" />
                    <a href="#modal-03" className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Clouds</h3>
                          <span className="folio-types">Web Design</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- /folio-item --> */}

                <div className="bgrid folio-item">
                  <div className="item-wrap">
                    <img src={beetle} alt="Beetle" />
                    <a href="#modal-04" className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Beetle</h3>
                          <span className="folio-types">Branding</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- /folio-item -->      */}

                <div className="bgrid folio-item">
                  <div className="item-wrap">
                    <img src={lighthouse} alt="Lighthouse" />
                    <a href="#modal-05" className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Lighthouse</h3>
                          <span className="folio-types">Web Development</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- /folio-item --> */}

                <div className="bgrid folio-item">
                  <div className="item-wrap">
                    <img src={salad} alt="Salad" />
                    <a href="#modal-06" className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Salad</h3>
                          <span className="folio-types">Branding</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- /folio-item -->    */}

                {/* <!-- modal popups - begin */}
                {/* ============================================================= --> */}
                <div id="modal-01" className="popup-modal slider mfp-hide">
                  <div className="media">
                    <img src={mliberty} alt="" />
                  </div>

                  <div className="description-box">
                    <h4>Liberty</h4>
                    <p>
                      Proin gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit.
                    </p>

                    <div className="categories">Web Development</div>
                  </div>

                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a href="#close" className="popup-modal-dismiss">
                      Close
                    </a>
                  </div>
                </div>
                {/* <!-- /modal-01 --> */}

                <div id="modal-02" className="popup-modal slider mfp-hide">
                  <div className="media">
                    <img src={mshutterbug} alt="" />
                  </div>

                  <div className="description-box">
                    <h4>Shutterbug</h4>
                    <p>
                      Proin gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit.
                    </p>

                    <div className="categories">Web Design</div>
                  </div>

                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a href="#close" className="popup-modal-dismiss">
                      Close
                    </a>
                  </div>
                </div>
                {/* <!-- /modal-02 --> */}

                <div id="modal-03" className="popup-modal slider mfp-hide">
                  <div className="media">
                    <img src={mcloud} alt="" />
                  </div>

                  <div className="description-box">
                    <h4>Clouds</h4>
                    <p>
                      Proin gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit.
                    </p>

                    <div className="categories">Web Design</div>
                  </div>

                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a href="#close" className="popup-modal-dismiss">
                      Close
                    </a>
                  </div>
                </div>
                {/* <!-- /modal-03 --> */}

                <div id="modal-04" className="popup-modal slider mfp-hide">
                  <div className="media">
                    <img src={mbeetle} alt="" />
                  </div>

                  <div className="description-box">
                    <h4>Beetle</h4>
                    <p>
                      Proin gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit.
                    </p>

                    <div className="categories">Branding</div>
                  </div>

                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a href="#close" className="popup-modal-dismiss">
                      Close
                    </a>
                  </div>
                </div>
                {/* <!-- /modal-04 --> */}

                <div id="modal-05" className="popup-modal slider mfp-hide">
                  <div className="media">
                    <img src={mlighthouse} alt="" />
                  </div>

                  <div className="description-box">
                    <h4>Lighthouse</h4>
                    <p>
                      Proin gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit.
                    </p>

                    <div className="categories">Web Development</div>
                  </div>

                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a href="#close" className="popup-modal-dismiss">
                      Close
                    </a>
                  </div>
                </div>
                {/* <!-- /modal-05 --> */}

                <div id="modal-06" className="popup-modal slider mfp-hide">
                  <div className="media">
                    <img src={msalad} alt="" />
                  </div>

                  <div className="description-box">
                    <h4>Salad</h4>
                    <p>
                      Proin gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit.
                    </p>

                    <div className="categories">Branding</div>
                  </div>

                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a href="#close" className="popup-modal-dismiss">
                      Close
                    </a>
                  </div>
                </div>
                {/* <!-- /modal-06 --> */}

                {/* <!-- modal popups - end */}
                {/* ============================================================= --> */}
              </div>
              {/* <!-- /portfolio-wrapper -->  */}
            </div>
            {/* <!-- /twelve -->    */}
          </div>
          {/* <!-- /portfolio-content -->  */}
        </section>
        {/* <!-- /portfolio -->  */}
      </div>
    );
  }
}

export default Portfolio;
