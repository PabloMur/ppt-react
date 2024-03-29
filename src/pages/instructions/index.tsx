import React from "react";
import css from "./styles.module.css";
import CustomText from "../../components/customText";
import CustomButton from "../../components/customButton";

const InstructionsPage = () => {
  return (
    <>
      <div className={css.root}>
        <CustomText variant="title">Instrucciones</CustomText>
        <div className={css.textContainer}>
          <CustomText variant="body">
            Presioná jugar y elegí: piedra, papel o tijera antes de que pasen
            los 3 segundos.
          </CustomText>
        </div>
        <CustomButton route="/choose">Jugar!</CustomButton>
      </div>
    </>
  );
};

export { InstructionsPage };
