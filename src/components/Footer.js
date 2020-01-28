import React from 'react';
import { Link } from 'gatsby';

// import logo from '../img/logo.svg';
import logo from '../img/CodeNutt-02.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content columns ">
          <aside className="column is-one-third has-text-centered">
            <img src={logo} alt="Digital Nutt" style={{ width: '10em' }} />
          </aside>
          <section className="column">
            <h4 className="title is-4 has-text-white">Socials</h4>
            <ul>
              <li>Medium</li>
              <li>Twitter</li>
              <li>Dev.to</li>
              <li>Youtube</li>
              <li>Github</li>
              <li>LinkedIn</li>
            </ul>
          </section>
        </div>
        <div className="content">Socials</div>
      </footer>
    );
  }
};

export default Footer;
