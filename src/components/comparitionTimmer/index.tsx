import React, { useEffect } from "react";
import { useGoTo } from "../../hooks/uiHooks";
const ComparitionTimmer = () => {
  const goTo = useGoTo();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      goTo("/result");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <div />;
};

export default ComparitionTimmer;
