import { useState, useEffect } from "react";
import { useUserChoice } from "../../hooks";
import { useGoTo } from "../../hooks/uiHooks";

const CuentaRegresiva = () => {
  const [count, setCount] = useState(3);
  const userChoice = useUserChoice();
  const goTo = useGoTo();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(countdownInterval);
      goTo("/instructions");
    }

    return () => clearInterval(countdownInterval);
  }, [count]);

  return (
    <div>{count === 0 ? "¡Tiempo acabado!" : `Quedan ${count} segundos`}</div>
  );
};

export { CuentaRegresiva };
