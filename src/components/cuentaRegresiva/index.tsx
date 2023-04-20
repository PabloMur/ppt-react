import { useState, useEffect } from "react";
import { useGoTo } from "../../hooks/uiHooks";
import { useUserChoosed } from "../../hooks";

const CuentaRegresiva = () => {
  const [count, setCount] = useState(3);
  const goTo = useGoTo();
  const flag = useUserChoosed();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0 && !flag) {
      clearInterval(countdownInterval);
      goTo("/instructions");
    } else if (flag) {
      clearInterval(countdownInterval);
      goTo("/comparition");
    }

    return () => clearInterval(countdownInterval);
  }, [count]);

  return (
    <div>{count === 0 ? "¡Tiempo acabado!" : `Quedan ${count} segundos`}</div>
  );
};

export { CuentaRegresiva };
