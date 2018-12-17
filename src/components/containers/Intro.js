import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <section id="intro" className="wrapper style1">
        <div className="title">About Us</div>
        <div className="container">
          <p className="style1">
            So in case you were wondering what this is all about ...
          </p>
          <p className="style2">
            We take music serious and look down on your lowbrow taste
            <br className="mobile-hide" />
          </p>

          <ul className="actions">
            <li>
              <a href="#" className="button style3 large">
                Proceed
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Intro;
