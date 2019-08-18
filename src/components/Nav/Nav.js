import React from 'react';
import { Link } from "react-router-dom";

import './Nav.css';
const imgPlaceholder = "https://cdn2.vectorstock.com/i/thumb-large/20/76/man-avatar-profile-vector-21372076.jpg";

const Nav = props => {
  return (
    <div className="nav-section">
      <div className="nav-list">
        <Link className="nav-link" to="/">Test list</Link>
        <Link className="nav-link" to="/add">Add test</Link>
      </div>
      <img alt="avatar" className="nav-avatar" src={imgPlaceholder}></img>
    </div>
  );
}

export default Nav;