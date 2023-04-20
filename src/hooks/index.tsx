import { useRecoilValue, useSetRecoilState } from "recoil";
import { useState } from "react";
import {
  pcChoice,
  pcScoreAtom,
  result,
  userChoice,
  userScoreAtom,
} from "../atoms/index";

type jugada = "piedra" | "papel" | "tijera";
type resultado = "gane" | "empate" | "perdi";

export function useJuego() {
  const [score, setScore] = useState({ tu: 0, maquina: 0 });
  const [result, setResult] = useState(null);

  function jugar(miJugada: jugada) {
    const jugadasPosibles = ["piedra", "papel", "tijera"];
    const PCjuagada =
      jugadasPosibles[Math.floor(Math.random() * jugadasPosibles.length)];

    const gane = [
      miJugada === "piedra" && PCjuagada === "tijera",
      miJugada === "papel" && PCjuagada === "piedra",
      miJugada === "tijera" && PCjuagada === "papel",
    ].includes(true);

    const perdi = [
      miJugada === "papel" && PCjuagada === "tijera",
      miJugada === "piedra" && PCjuagada === "papel",
      miJugada === "tijera" && PCjuagada === "piedra",
    ].includes(true);

    if (gane) {
      setScore((prevScore) => ({
        tu: prevScore.tu + 1,
        maquina: prevScore.maquina,
      }));
      //setResult("gane");
    } else if (perdi) {
      setScore((prevScore) => ({
        tu: prevScore.tu,
        maquina: prevScore.maquina + 1,
      }));
      //setResult("perdi");
    } else {
      //setResult("empate");
    }
  }

  return [score, result, jugar];
}

// Hook para que el user setee en el state la mano que ha elegido
export const useSetUserChoice = () => {
  const setMyChoice = useSetRecoilState(userChoice);

  const handleClick = (choice: jugada) => {
    setMyChoice(choice);
  };

  return handleClick;
};

export const useSetPCChoice = () => {
  const setPcChoice = useSetRecoilState(pcChoice);

  const handleClick = (choice: jugada) => {
    setPcChoice(choice);
  };

  return handleClick;
};

// Hook para saber el resultado de una partida
export const useResultValue = () => {
  const resultValue = useRecoilValue(result);
  return resultValue;
};

//saber la eleccion que hizo el user
export const useUserChoice = () => {
  const userChoiceValue = useRecoilValue(userChoice);
  return userChoiceValue;
};

//saber el score actual
export const useCurrentScore = () => {
  const userScore = useRecoilValue(userScoreAtom);
  const pcScore = useRecoilValue(pcScoreAtom);
  const CurrentScore = {
    user: userScore,
    pc: pcScore,
  };
  return CurrentScore;
};
