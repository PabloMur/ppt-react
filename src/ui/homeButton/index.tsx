import React from "react";
import css from "./styles.module.css";
import homeImg from "../../img/home-button.png";
import { useGoTo } from "../../hooks/uiHooks";

const BackHomeButton = () => {
  const goTo = useGoTo();

  function handleClick() {
    goTo("/");
  }

  return (
    <>
      <div onClick={handleClick}>
        <img src={homeImg} alt="home icon" className={css.homeLogo} />
      </div>
    </>
  );
};
export default BackHomeButton;
