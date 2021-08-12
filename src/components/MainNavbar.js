import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MainNavbar(props) {

  return (
      <div>
        <Navbar fixed="top">
          <Navbar.Brand>
            <Link className="site-title nav-props" to="/">
              Grubsy
            </Link>
          </Navbar.Brand>
        </Navbar>
      </div>
  );
}

export default MainNavbar;