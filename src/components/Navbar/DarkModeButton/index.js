import React from "react";
import { Badge } from "reactstrap";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const { checkDarkState } = require("../../utils");

export default function DarkModeButton({ isDark }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <div>
      <Badge pill color="light" onClick={() => handleClick()}>
        <FontAwesomeIcon
          icon={checkDarkState(isDark, faSun, faMoon)}
          color="orange"
          style={darkModeStyle}
        />
      </Badge>
    </div>
  );
}

const darkModeStyle = {
  cursor: "pointer",
  fontSize: "1rem",
};
