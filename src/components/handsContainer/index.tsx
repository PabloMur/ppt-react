import React from "react";
import css from "./styles.module.css";

const HandsContainer = () => {
  return (
    <>
      <div className={css.root}>
        <div className={css.piedra}></div>
        <div className={css.papel}></div>
        <div className={css.tijera}></div>
      </div>
    </>
  );
};

export { HandsContainer };
