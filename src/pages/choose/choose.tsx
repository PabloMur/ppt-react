import React from "react";
import css from "./styles.module.css";
import { GameOption } from "../../components/gameOption";
import { CuentaRegresiva } from "../../components/cuentaRegresiva";

const ChoosePage = () => {
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
