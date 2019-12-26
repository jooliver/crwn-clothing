import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProp }) => (
  <button
    className={`${inverted ? "inverted" : ""} custom-button`}
    {...otherProp}
  >
    {children}
  </button>
);

export default CustomButton;
