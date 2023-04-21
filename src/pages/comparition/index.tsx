import React, { useEffect } from "react";
import { usePCChoice, useUserChoice, useJuego } from "../../hooks";
import { GameOption } from "../../components/gameOption";
import ComparitionTimmer from "../../components/comparitionTimmer";
import css from "./styles.module.css";

const ComparitionPage = () => {
  const userChoice = useUserChoice();
  const prChoice = usePCChoice();
  const play = useJuego();

  function Jugar() {
    play(userChoice, prChoice);
  }

  useEffect(() => {
    Jugar();
  }, []);
  //temporal

  return (
    <div className={css.root}>
      <div className={css.shield}></div>
      <div className={css.pcMove}>
        <GameOption variant={prChoice} />
      </div>
      <div className={css.playerMove}>
        <GameOption variant={userChoice} />
      </div>
      <ComparitionTimmer />
    </div>
  );
};

export default ComparitionPage;
