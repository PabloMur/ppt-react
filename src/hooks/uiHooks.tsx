import { useNavigate } from "react-router-dom";

export const useGoTo = () => {
  const goTo = useNavigate();
  return goTo;
};
