import React, { useEffect } from "react";
import { useGoTo } from "../../hooks/uiHooks";
const ComparitionTimmer = () => {
  const goTo = useGoTo();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      goTo("/result");
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <div />;
};

export default ComparitionTimmer;
