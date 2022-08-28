import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer>
      <ul className="foot-links">
        <li className="foot-link">
          <a href="https://github.com/cpaschall ">
            <FontAwesomeIcon icon={['fab', 'github-alt']} className="fa-solid fa-xl"/>
            </a>
        </li>
        <li className="foot-link">
          <a href="https://linkedin.com/in/calvin-paschall">
            <FontAwesomeIcon icon={['fab', 'linkedin']} className="fa-solid fa-xl"/>
            </a>
        </li>
        <li className="foot-link">
          <a href="https://twitter.com/calpaschall/">
          <FontAwesomeIcon icon={['fab', 'twitter']} className="fa-solid fa-xl"/>
          </a>
        </li>
      </ul>
    </footer>
  )
};

export default Footer;