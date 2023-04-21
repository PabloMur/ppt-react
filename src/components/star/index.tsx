import React from "react";
import css from "./style.module.css";
import { useResultValue } from "../../hooks";
import ganaste from "../../img/ganaste.svg";
import perdiste from "../../img/perdiste.svg";
import empataste from "../../img/empataste.svg";
//coordinar con el atomo del resultado de la partida y con base en eso devolver la imagen

const Star = () => {
  const result = useResultValue();

  if (result === "ganaste") {
    return (
      <>
        <div className="scoreCont">
          <img className={css.starEl} src={ganaste} />
        </div>
      </>
    );
  }

  if (result === "perdiste") {
    return (
      <>
        <div className="scoreCont">
          <img className={css.starEl} src={perdiste} />
        </div>
      </>
    );
  }

  if (result === "empataste") {
    return (
      <>
        <div className="scoreCont">
          <img className={css.starEl} src={empataste} />
        </div>
      </>
    );
  } else return <div />;
};

export { Star };
