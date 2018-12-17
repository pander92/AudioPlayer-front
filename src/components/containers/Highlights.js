import React, { Component } from 'react';

class Highlights extends Component {
  render() {
    return (
      <section id="highlights" className="wrapper style3">
        <div className="title">Our Method</div>
        <div className="container">
          <div className="row aln-center">
            <div className="col-4 col-12-medium">
              <section className="highlight">
                <a href="#" className="image featured">
                  <img src="/images/agr1.jpg" alt />
                </a>
                <h3>
                  <a href="#">We Dig</a>
                </h3>
              </section>
            </div>
            <div className="col-4 col-12-medium">
              <section className="highlight">
                <a href="#" className="image featured">
                  <img src="/images/agr2.jpg" alt />
                </a>
                <h3>
                  <a href="#">Dig Some More</a>
                </h3>
              </section>
            </div>
            <div className="col-4 col-12-medium">
              <section className="highlight">
                <a href="#" className="image featured">
                  <img src="/images/music1.jpg" alt />
                </a>
                <h3>
                  <a href="#">And Keep Digging</a>
                </h3>
                <p>
                  Until we find that track no one else has ever heard of so you
                  can then put others down for not being as unique you.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Highlights;
