import React from "react";
import css from "./styles.module.css";

function CustomText({ variant = "body", children }: any) {
  return (
    <div>
      <div className={variant}>{children}</div>
    </div>
  );
}

export default CustomText;
