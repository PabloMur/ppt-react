import React from "react";
import css from "./styles.module.css";
import { useGoTo } from "../../hooks/uiHooks";

const CustomButton = ({ route, children }: any) => {
  const goTo = useGoTo();
  const handleClick = () => {
    goTo(route);
  };
  return (
    <button className={css.root} onClick={handleClick}>
      {children || "ups!"}
    </button>
  );
};

export default CustomButton;
