import React from "react";
import css from "./styles.module.css";
import CustomText from "../../components/customText";
import CustomButton from "../../components/customButton";
import { HandsContainer } from "../../components/handsContainer";
import { useGoTo } from "../../hooks/uiHooks";

const WelcomePage = () => {
  const goTo = useGoTo();

  function handleClick() {
    goTo("/instructions");
  }

  return (
    <div className={css.root}>
      <CustomText variant="title">Piedra Papel o Tijera</CustomText>
      <HandsContainer />
      <div onClick={handleClick}>
        <CustomButton>Empezar!</CustomButton>
      </div>
    </div>
  );
};

export { WelcomePage };
