import React from "react";
import css from "./styles.module.css";
import CustomText from "../../components/customText";
import { useGoTo } from "../../hooks/uiHooks";
import CustomButton from "../../components/customButton";

const InstructionsPage = () => {
  const goTo = useGoTo();

  function handleClick() {
    goTo("/choose");
  }
  return (
    <>
      <div className={css.root}>
        <CustomText variant="title">Instrucciones</CustomText>
        <CustomText variant="body">
          Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los
          3 segundos.
        </CustomText>
        <div onClick={handleClick}>
          <CustomButton>Jugar!</CustomButton>
        </div>
      </div>
    </>
  );
};

export { InstructionsPage };
