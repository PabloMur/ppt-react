import React from "react";
import tijera from "../../img/tijera.svg";
import piedra from "../../img/piedra.svg";
import papel from "../../img/papel.svg";
import { useSetUserChoice } from "../../hooks/index";

const GameOption = ({ variant }: any) => {
  const setChoice = useSetUserChoice();

  const handleClick = (choice: any) => {
    setChoice(choice);
  };

  if (variant === "piedra") {
    return (
      <div
        onClick={() => {
          handleClick("piedra");
        }}
      >
        <img src={piedra} alt="imagen de piedra" />
      </div>
    );
  } else if (variant === "papel") {
    return (
      <>
        <div
          onClick={() => {
            handleClick("papel");
          }}
        >
          <img src={papel} alt="imagen de papel" />
        </div>
      </>
    );
  } else if (variant === "tijera") {
    return (
      <>
        <div
          onClick={() => {
            handleClick("tijera");
          }}
        >
          <img src={tijera} alt="imagen de tijera" />
        </div>
      </>
    );
  } else return <>el elemento no esta usado correctamente</>;
};

export { GameOption };
