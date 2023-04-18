import { useState, useEffect } from "react";
import { useResultValue, useUserChoice } from "../../hooks";
import { useGoTo } from "../../hooks/uiHooks";
import { userChoice } from "../../atoms";

const CuentaRegresiva = () => {
  const [count, setCount] = useState(3);
  const result = useResultValue();
  const useChoice = useUserChoice();
  const goTo = useGoTo();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(countdownInterval);
      console.log("termino el tiempo" + useChoice);
      goTo("/instructions");
    }

    return () => clearInterval(countdownInterval);
  }, [count]);

  return (
    <div>{count === 0 ? "¡Tiempo acabado!" : `Quedan ${count} segundos`}</div>
  );
};

export { CuentaRegresiva };
