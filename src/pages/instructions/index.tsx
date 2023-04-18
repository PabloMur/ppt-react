import React from "react";
import css from "./styles.module.css";
import CustomText from "../../components/customText";
import CustomButton from "../../components/customButton";

const InstructionsPage = () => {
  return (
    <>
      <div className={css.root}>
        <CustomText variant="title">Instrucciones</CustomText>
        <CustomText variant="body">
          Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los
          3 segundos.
        </CustomText>
        <CustomButton route="/choose">Jugar!</CustomButton>
      </div>
    </>
  );
};

export { InstructionsPage };
