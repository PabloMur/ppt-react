import React from "react";
import css from "./styles.module.css";
import CustomText from "../../components/customText";
import CustomButton from "../../components/customButton";

const WelcomePage = () => {
  return (
    <div className={css.root}>
      <CustomText variant="title">Piedra Papel o Tijera</CustomText>
      <CustomButton>Empezar!</CustomButton>
    </div>
  );
};

export { WelcomePage };
