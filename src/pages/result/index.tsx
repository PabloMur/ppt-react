import React from "react";
import css from "./styles.module.css";
import CustomButton from "../../components/customButton";
import ScoreComponent from "../../components/scoreComponent";
import { Star } from "../../components/star";
import { useResetGame } from "../../hooks";

const ResultPage = () => {
  const resetGame = useResetGame();
  function Reset() {
    resetGame();
  }
  return (
    <>
      <div className={css.root}>
        <Star></Star>
        <ScoreComponent></ScoreComponent>
        <div
          onClick={() => {
            Reset();
          }}
        >
          <CustomButton route="/instructions">Volver a Jugar!</CustomButton>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
