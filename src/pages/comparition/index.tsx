import React, { useEffect } from "react";
import { usePCChoice, useUserChoice, useJuego } from "../../hooks";
import { GameOption } from "../../components/gameOption";
import ComparitionTimmer from "../../components/comparitionTimmer";

const ComparitionPage = () => {
  const userChoice = useUserChoice();
  const prChoice = usePCChoice();
  const play = useJuego();

  function Jugar() {
    play(userChoice, prChoice);
  }

  useEffect(() => {
    Jugar();
  }, []);
  //temporal

  return (
    <div>
      <GameOption variant={userChoice} />
      <div>
        pc
        <GameOption variant={prChoice} />
      </div>
      <ComparitionTimmer />
    </div>
  );
};

export default ComparitionPage;
