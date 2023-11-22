import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/svg/logo.svg";

import { RenderCount } from "../RenderCount";

import styles from "./Header.module.scss";

export const Header = () => (
  <div className={styles.header}>
    <RenderCount />
    <Link to="/">
      <div className={styles.logo}>
        <img src={logo} className={styles.logo} alt="logo" />
      </div>
      <div className={styles.name}>Follow Beers</div>
    </Link>
  </div>
);
