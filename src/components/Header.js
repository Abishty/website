import React from "react";
import "../assets/css/base.css";
import "../assets/css/main.css";
import "../assets/css/vendor.css";
import $ from "jquery";

class Header extends React.Component {


componentDidMount() {
    var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

   // nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});
}

    
  render() {
    return (
      <div>
        <header>
          <div className="row">
            <div className="top-bar">
              <div className="menu-toggle" >
                <span>Menu</span>
              </div>

              <div className="logo">
                <a href="index.html">ME</a>
              </div>

              <nav id="main-nav-wrap">
                <ul className="main-navigation">
                  <li className="current">
                    <a className="smoothscroll" href="#intro" title="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#about" title="">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#resume" title="">
                      Resume
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#portfolio" title="">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#contact" title="">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- /top-bar -->  */}
          </div>
          {/* <!-- /row --> 		 */}
        </header>
        {/* <!-- /header --> */}
      </div>
    );
  }
}

export default Header;
