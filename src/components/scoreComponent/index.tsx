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
    <div className="scoreCont">
      <CustomText>Score</CustomText>
      <CustomText>Tú: {puntajeTu}</CustomText>
      <CustomText>Máquina: {puntajeMaquina}</CustomText>
    </div>
  );
}
