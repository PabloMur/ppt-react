import React, { useEffect } from "react";
import css from "./styles.module.css";
import { GameOption } from "../../components/gameOption";
import { CuentaRegresiva } from "../../components/cuentaRegresiva";
import { useUserChoice } from "../../hooks";
import { useGoTo } from "../../hooks/uiHooks";

const ChoosePage = () => {
  const userChoice = useUserChoice();
  const goTo = useGoTo();

  useEffect(() => {
    console.log(userChoice);
    if (userChoice === "none") {
      goTo("/instructions");
    }
  }, [userChoice]);

  return (
    <>
      <div className={css.root}>
        <CuentaRegresiva></CuentaRegresiva>
        <div className={css.hands}>
          <GameOption variant="piedra"></GameOption>
          <GameOption variant="papel"></GameOption>
          <GameOption variant="tijera"></GameOption>
        </div>
      </div>
    </>
  );
};

export { ChoosePage };
