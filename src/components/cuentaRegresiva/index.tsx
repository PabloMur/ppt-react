import { useState, useEffect } from "react";
import { useGoTo } from "../../hooks/uiHooks";
import { useUserChoosed } from "../../hooks";
import css from "./styles.module.css";

const CuentaRegresiva = () => {
  const [count, setCount] = useState(3);
  const goTo = useGoTo();
  const flag = useUserChoosed();

  useEffect(() => {
    //const countdownInterval = setInterval(() => {
    //  setCount((prevCount) => prevCount - 1);
    // }, 1000);
    // if (count === 0 && !flag) {
    //   clearInterval(countdownInterval);
    //   goTo("/instructions");
    //  } else if (flag) {
    //clearInterval(countdownInterval);
    //    goTo("/comparition");
    //   }
    //return () => clearInterval(countdownInterval);
    if (flag) {
      goTo("/comparition");
    }
  }, [flag]);

  return <div className={css.contador}></div>;
  //{count === 0 ? "¡Tiempo acabado!" : count}
};

export { CuentaRegresiva };
