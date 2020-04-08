import React from "react";
import { Link } from "gatsby";
// import github from '../img/github-icon.svg';
// import logo from '../img/logo.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar is-primary" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <h1 className="title has-text-yellow">Jared Nutt</h1>
            </Link>
            {/* Hamburger menu */}
            <div className={`navbar-burger burger ${this.state.navBarActiveClass}`} data-target="navMenu" onClick={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/work">
                <h2 className="has-text-yellow is-uppercase">Work</h2>
              </Link>
              <Link className="navbar-item" to="/teaching">
                <h2 className="has-text-yellow is-uppercase">Teaching</h2>
              </Link>
              <Link className="navbar-item" to="/art">
                <h2 className="has-text-yellow is-uppercase">Art</h2>
              </Link>
              <Link className="navbar-item" to="/contact">
                <h2 className="has-text-yellow is-uppercase">Contact</h2>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
