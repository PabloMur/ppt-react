import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  pcChoice,
  pcScoreAtom,
  result,
  userChoice,
  userScoreAtom,
  userChoosed,
} from "../atoms/index";

export function useJuego() {
  const resulSetter = useSetResult();
  const userScoreSetter = useSetUserWon();
  const pcScoreSetter = useSetPCWon();
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
      userScoreSetter();
    } else if (perdi) {
      resulSetter("perdiste");
      pcScoreSetter();
    } else {
      resulSetter("empataste");
    }
  }
  return jugar;
}

export function useResetGame() {
  const userChoiceSetter = useSetUserChoice();
  const pcChoiceSetter = useResetPCChoice();
  const resetFlagUserChoosed = useSetUserChoosed();
  function resetGame() {
    userChoiceSetter("");
    resetFlagUserChoosed(false);
    pcChoiceSetter();
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
  function makeReset() {
    resetter("");
  }
  return makeReset;
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

export const useSetUserWon = () => {
  const userScore = useRecoilValue(userScoreAtom);
  const userScoreSetter = useSetRecoilState(userScoreAtom);
  function increeseUserScore() {
    userScoreSetter(userScore + 1);
  }
  return increeseUserScore;
};

export const useSetPCWon = () => {
  const pcScore = useRecoilValue(pcScoreAtom);
  const pcScoreSetter = useSetRecoilState(pcScoreAtom);
  function increesePCScore() {
    pcScoreSetter(pcScore + 1);
  }
  return increesePCScore;
};
