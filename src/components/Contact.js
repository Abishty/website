import React from "react";
import "../assets/css/base.css";
import "../assets/css/main.css";
import "../assets/css/vendor.css";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <section id="contact">
          <div class="row section-intro">
            <div class="col-twelve">
              <h5>Contact</h5>
              <h1>I'd Love To Hear From You.</h1>

              <p class="lead">
                Lorem ipsum Do commodo in proident enim in dolor cupidatat
                adipisicing dolore officia nisi aliqua incididunt Ut veniam
                lorem ipsum Consectetur ut in in eu do.
              </p>
            </div>
          </div>
          {/* <!-- /section-intro --> */}

          <div class="row contact-form">
            <div class="col-twelve">
              {/* <!-- form --> */}
              <form name="contactForm" id="contactForm" method="post" action="">
                <fieldset>
                  <div class="form-field">
                    <input
                      name="contactName"
                      type="text"
                      id="contactName"
                      placeholder="Name"
                      value=""
                      minlength="2"
                      required=""
                    />
                  </div>
                  <div class="form-field">
                    <input
                      name="contactEmail"
                      type="email"
                      id="contactEmail"
                      placeholder="Email"
                      value=""
                      required=""
                    />
                  </div>
                  <div class="form-field">
                    <input
                      name="contactSubject"
                      type="text"
                      id="contactSubject"
                      placeholder="Subject"
                      value=""
                    />
                  </div>
                  <div class="form-field">
                    <textarea
                      name="contactMessage"
                      id="contactMessage"
                      placeholder="Message"
                      rows="10"
                      cols="50"
                      required=""
                    ></textarea>
                  </div>
                  <div class="form-field">
                    <button class="submitform">Submit</button>
                    <div id="submit-loader">
                      <div class="text-loader">Sending...</div>
                      <div class="s-loader">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
              {/* <!-- Form End --> */}

              {/* <!-- contact-warning --> */}
              <div id="message-warning"></div>
              {/* <!-- contact-success --> */}
              <div id="message-success">
                <i class="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
            {/* <!-- /col-twelve --> */}
          </div>
          {/* <!-- /contact-form --> */}

          <div class="row contact-info">
            <div class="col-four tab-full">
              <div class="icon">
                <i class="icon-pin"></i>
              </div>

              <h5>Where to find me</h5>

              <p>
                Flat No.D, 3rd Floor, 7-Vijay Block
                <br />
                Laxmi Nagar, New Delhi
                <br />
                110092 INDIA
              </p>
            </div>

            <div class="col-four tab-full collapse">
              <div class="icon">
                <i class="icon-mail"></i>
              </div>

              <h5>Email Me At</h5>

              <p>
                18abhishek.b@gmail.com
                <br />
                abhishekbisht1895@gmail.com
              </p>
            </div>

            <div class="col-four tab-full">
              <div class="icon">
                <i class="icon-phone"></i>
              </div>

              <h5>Call Me At</h5>

              <p>
                Mobile: 8447029160
              </p>
            </div>
          </div>
          {/* <!-- /contact-info --> */}
        </section>
        {/* <!-- /contact --> */}
      </div>
    );
  }
}

export default Contact;
