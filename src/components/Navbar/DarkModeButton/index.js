//Packages
import React from "react";
import { Badge } from "reactstrap";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

//Local Files
import { darkModeStyle } from "./style";
//Components
import { checkDarkState } from "../../utils";

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
