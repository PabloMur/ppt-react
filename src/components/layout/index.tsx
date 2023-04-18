import React from "react";
import css from "./styles.module.css";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={css.root}>
      <Outlet />
    </div>
  );
}

export { Layout };
