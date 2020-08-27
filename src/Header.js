import React, { Component } from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backbutton }) {
  const history = useHistory();
  return (
    <div className="header">
      {/* Should use history.replace but doesn't work???  const history = useHistory();*/}
      {backbutton ? (
        <Link to="/">
          <IconButton>
            <ArrowBackIosIcon fontSize="large" classname="header-icon" Link />
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          <PersonIcon fontSize="Large" className="header-icon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header-image"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="TinderLogo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="Large" className="header-icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
