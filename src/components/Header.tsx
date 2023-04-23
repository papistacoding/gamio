import React from "react";
import { Avatar } from "./Avatar";
import classes from "./Header.module.css";
import { Navigation } from "./Navigation";

export const Header: React.FC = () => {
  return (
    <>
      <div className={classes.headerDesktop}>
        <div className={classes.header}>
          <img
            className={classes.headerImage}
            src="/images/header_img.svg"
            alt="header"
            data-testid="header-image"
          />
        </div>
        <Avatar data-testid="avatar" />
        <div className={classes.clip}></div>
        <Navigation data-testid="navigation" />
        <div className={classes.blurredMark}></div>
      </div>
    </>
  );
};
