import React from "react";
import CustomText from "../customText";
import css from "./styles.module.css";
import { useCurrentScore } from "../../hooks";

function ScoreComponent() {
  const { user, pc } = useCurrentScore();

  return (
    <div className={css.root}>
      <CustomText variant="body">Score</CustomText>
      <CustomText variant="body">Tú: {user}</CustomText>
      <CustomText variant="body">Máquina: {pc}</CustomText>
    </div>
  );
}

export default ScoreComponent;
