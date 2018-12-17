import React, { Component } from 'react';
import { Nav } from '../layout';

class Header extends Component {
  render() {
    return (
      // Header
      <section id="header" className="wrapper">
        <div id="logo">
          <h1>
            <a href="index.html">Audio Diggers</a>
          </h1>
          <p>Your best pals from way back</p>
        </div>
        <Nav />
      </section>
    );
  }
}

export default Header;
