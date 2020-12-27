import React from "react";
import { Modal, Alert } from "reactstrap";
import { styledNotification } from "./style";

const { checkDarkState } = require("../utils");

export default function Notification({ notification, isDark }) {
  return (
    <div>
      <Modal isOpen={notification}>
        <Alert
          color={checkDarkState(isDark, "dark", "success")}
          style={styledNotification}
        >
          Caught Successfully!
        </Alert>
      </Modal>
    </div>
  );
}
