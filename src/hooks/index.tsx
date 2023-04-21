import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  pcChoice,
  pcScoreAtom,
  result,
  userChoice,
  userScoreAtom,
  userChoosed,
} from "../atoms/index";

type jugada = "piedra" | "papel" | "tijera";

export function useJuego() {
  const resulSetter = useSetResult();
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
      resulSetter("ganaste");
    } else if (perdi) {
      resulSetter("perdiste");
    } else {
      resulSetter("empataste");
    }
  }
  return jugar;
}

export function useResetGame() {
  const userChoiceSetter = useSetUserChoice();
  const pcChoiceSetter = useResetPCChoice();
  function resetGame() {
    userChoiceSetter("");
    pcChoiceSetter("");
  }
  return resetGame;
}

// Hook para que el user setee en el state la mano que ha elegido
export const useSetUserChoice = () => {
  const setMyChoice = useSetRecoilState(userChoice);
  return setMyChoice;
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

export const useResetPCChoice = () => {
  const resetter = useSetRecoilState(pcChoice);
  return resetter;
};

export const usePCChoice = () => {
  const pcChoiceVal = useRecoilValue(pcChoice);
  return pcChoiceVal;
};

export const useSetResult = () => {
  const setter = useSetRecoilState(result);
  return setter;
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
