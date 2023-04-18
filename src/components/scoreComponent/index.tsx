import React from "react";
import CustomText from "../customText";
import css from "./styles.module.css";

function ScoreComponent() {
  //   const [puntajeMaquina, setPuntajeMaquina] = useState(0);
  //   const [puntajeTu, setPuntajeTu] = useState(0);
  //   const [resultadoPartida, setResultadoPartida] = useState("");
  const puntajeTu = 1;
  const puntajeMaquina = 1;

  return (
    <div className={css.root}>
      <CustomText variant="body">Score</CustomText>
      <CustomText variant="body">Tú: {puntajeTu}</CustomText>
      <CustomText variant="body">Máquina: {puntajeMaquina}</CustomText>
    </div>
  );
}

export default ScoreComponent;
