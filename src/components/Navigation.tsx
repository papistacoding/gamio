import React from "react";
import classes from "./Navigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navigation: React.FC = () => {
  const { route } = useRouter();

  return (
    <div className={classes.navWrapper}>
      <Link
        className={` ${classes.link}  ${
          route === "/" ? classes.active : " color-gray"
        }`}
        href={"/"}
      >
        OVERVIEW
      </Link>
      <Link
        className={` ${classes.link}  ${
          route === "/inventory" ? classes.active : " color-gray"
        }`}
        href={"/inventory"}
      >
        INVENTORY
      </Link>
      <Link
        className={` ${classes.link}  ${
          route === "/settings" ? classes.active : " color-gray"
        }`}
        href={"/settings"}
      >
        SETTINGS
      </Link>
    </div>
  );
};

