import React from "react";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import $ from "jquery";

class App extends React.Component {
  componentDidMount() {
    $(window).on("load", function() {
      // will first fade out the loading animation
      $("#loader").fadeOut("slow", function() {
        // will fade out the whole DIV that covers the website.
        $("#preloader")
          .delay(300)
          .fadeOut("slow");
      });
    });
  }

  render() {
    return (
      <div id="top">
        <Header />
        <IntroSection />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
        <div id="preloader">
          <div id="loader"></div>
        </div>
      </div>
    );
  }
}

export default App;
