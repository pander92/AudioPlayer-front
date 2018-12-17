import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Intro, Main, Highlights, Footer } from '../containers';

import { loginUser } from '../../actions';
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      // this.props.history.push('/');
      this.props.history.push('/users/home');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/users/home');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
    this.setState({
      email: '',
      password: ''
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div id="container_login">
          <h1>Welcome, Please Login</h1>
          {/* <h1>Welcome, Please Login</h1> */}

          <form onSubmit={this.onSubmit} ref={el => (this.form = el)}>
            <TextFieldGroup
              placeholder="Email"
              label="Email"
              name="email"
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
            />

            <TextFieldGroup
              placeholder="********"
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.message}
              id="password"
            />
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <br />
            <br />

            <hr />
          </form>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
