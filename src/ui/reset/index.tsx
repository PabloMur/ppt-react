import React from "react";
import css from "./styles.module.css";
import { useResetScore } from "../../hooks";

const ResetButton = () => {
  const resetFunction = useResetScore();
  function handleClick() {
    resetFunction();
  }
  return (
    <div>
      <button onClick={handleClick} className={css.root}>
        RESET
      </button>
    </div>
  );
};

export default ResetButton;
