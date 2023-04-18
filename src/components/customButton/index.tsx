import React from "react";
import css from "./styles.module.css";

const CustomButton = ({ children }: any) => (
  <button className={css.root}>{children || "ups!"}</button>
);

export default CustomButton;
