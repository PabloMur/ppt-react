import React from "react";
import css from "./styles.module.css";

function CustomText({ variant, children }: any) {
  if (variant === "title") {
    return (
      <div>
        <div className={css.title}>{children}</div>
      </div>
    );
  } else if (variant === "body") {
    return (
      <>
        <div>
          <div className={css.body}>{children}</div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default CustomText;
