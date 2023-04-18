import React from "react";
import css from "./styles.module.css";
import CustomButton from "../../components/customButton";
import ScoreComponent from "../../components/scoreComponent";
import { Star } from "../../components/star";

const ResultPage = () => {
  return (
    <>
      <div className={css.root}>
        <Star></Star>
        <ScoreComponent></ScoreComponent>
        <CustomButton route="/instructions">Volver a Jugar!</CustomButton>
      </div>
    </>
  );
};

export default ResultPage;
