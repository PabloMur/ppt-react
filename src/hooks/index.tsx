import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  pcChoice,
  pcScoreAtom,
  result,
  userChoice,
  userScoreAtom,
  userChoosed,
} from "../atoms/index";
import { log } from "console";

type jugada = "piedra" | "papel" | "tijera";

export function useJuego() {
  function jugar(miJugada: any, PCjuagada: any) {
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
      //setResult ("ganaste")
      console.log("Ganaste");
    } else if (perdi) {
      //setResult("perdiste");
      console.log("Perdiste");
    } else {
      //setResult("empate");
      console.log("Empataste");
    }
  }
  return jugar;
}

// Hook para que el user setee en el state la mano que ha elegido
export const useSetUserChoice = () => {
  const setMyChoice = useSetRecoilState(userChoice);

  const handleClick = (choice: jugada) => {
    setMyChoice(choice);
  };

  return handleClick;
};

//flag para informar que el usuario eligio
export const useUserChoosed = () => {
  const flagValue = useRecoilValue(userChoosed);
  return flagValue;
};

export const useSetUserChoosed = () => {
  const flagSetter = useSetRecoilState(userChoosed);
  return flagSetter;
};

export const useSetPCChoice = () => {
  const setPcChoice = useSetRecoilState(pcChoice);

  const handleClick = () => {
    const jugadasPosibles = ["piedra", "papel", "tijera"];
    const PCjuagada =
      jugadasPosibles[Math.floor(Math.random() * jugadasPosibles.length)];
    setPcChoice(PCjuagada);
  };

  return handleClick;
};

export const usePCChoice = () => {
  const pcChoiceVal = useRecoilValue(pcChoice);
  return pcChoiceVal;
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
