import React from 'react';
import { Link } from 'gatsby';
import PDF from '../assets/documents/Max_Zander_SE_Resume_Feb_2021.pdf';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/Generic">Generic Page</Link>
              </li> */}
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <a href={PDF} target="_blank" rel="noreferrer noopener">Resume</a>
              </li>
              <li>
                <a href="https://maxjacobzander.github.io" target="_blank" rel="noreferrer noopener">Blog</a>
              </li>
              {/* <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/Elements">Elements</Link>
              </li> */}
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
