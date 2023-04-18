import React from "react";
import css from "./styles.module.css";
import CustomText from "../../components/customText";
import CustomButton from "../../components/customButton";
import { HandsContainer } from "../../components/handsContainer";

const WelcomePage = () => {
  return (
    <div className={css.root}>
      <CustomText variant="title">Piedra Papel o Tijera</CustomText>
      <HandsContainer />
      <CustomButton>Empezar!</CustomButton>
    </div>
  );
};

export { WelcomePage };
