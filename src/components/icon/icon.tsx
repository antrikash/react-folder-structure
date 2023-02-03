import React from "react";
import IcoMoon from "react-icomoon";
import iconSet from "../../assets/fonts/icon/selection.json";

export const Icon = ({ size = 30, ...props }) => {
  return <IcoMoon iconSet={iconSet} size={size} {...props} />;
};
