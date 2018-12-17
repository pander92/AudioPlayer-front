import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <section id="footer" className="wrapper">
        <div className="title">Contact Us</div>
        <div className="container">
          <header className="style1">
            <h2>Ipsum sapien elementum portitor?</h2>
            <p>
              Sed turpis tortor, tincidunt sed ornare in metus porttitor mollis
              nunc in aliquet.
              <br />
              Nam pharetra laoreet imperdiet volutpat etiam feugiat.
            </p>
          </header>
          <div className="row">
            <div className="col-6 col-12-medium">
              {/* Contact Form */}
              <section />
            </div>
            <div className="col-12 col-12-medium">
              {/* Contact */}
              <section className="feature-list small">
                <div className="row">
                  <div className="col-6 col-12-small">
                    <section>
                      <h3 className="icon fa-home">Mailing Address</h3>
                      <p>
                        Untitled Corp
                        <br />
                        1234 Somewhere Rd
                        <br />
                        Nashville, TN 00000
                      </p>
                    </section>
                  </div>
                  <div className="col-6 col-12-small">
                    <section>
                      <h3 className="icon fa-comment">Social</h3>
                      <p>
                        <a href="#">@untitled-corp</a>
                        <br />
                        <a href="#">linkedin.com/untitled</a>
                        <br />
                        <a href="#">facebook.com/untitled</a>
                      </p>
                    </section>
                  </div>
                  <div className="col-6 col-12-small">
                    <section>
                      <h3 className="icon fa-envelope">Email</h3>
                      <p>
                        <a href="#">info@untitled.tld</a>
                      </p>
                    </section>
                  </div>
                  <div className="col-6 col-12-small">
                    <section>
                      <h3 className="icon fa-phone">Phone</h3>
                      <p>(000) 555-0000</p>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div id="copyright">
            <ul>
              <li>© Untitled.</li>
              <li>
                Design: <a href="http://html5up.net">HTML5 UP</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
