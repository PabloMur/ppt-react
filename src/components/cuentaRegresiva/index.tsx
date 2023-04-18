import { useState, useEffect } from "react";

const CuentaRegresiva = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(countdownInterval);
      console.log("termino el tiempo");
    }

    return () => clearInterval(countdownInterval);
  }, [count]);

  return (
    <div>{count === 0 ? "¡Tiempo acabado!" : `Quedan ${count} segundos`}</div>
  );
};

export { CuentaRegresiva };
