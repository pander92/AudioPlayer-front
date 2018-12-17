import React, { Component } from 'react';
import Maps from './Map/Maps';

class MapComp extends Component {
  render() {
    return (
      <section id="location" className="wrapper style3">
        <div className="title">Your Location</div>
        <div className="container">
          <Maps />
        </div>
      </section>
    );
  }
}

export default MapComp;
