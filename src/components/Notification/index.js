import React from "react";
import { Modal, Alert } from "reactstrap";

const { checkDarkState } = require("../utils");

export default function Notification({ notification, isDark }) {
  return (
    <div>
      <Modal isOpen={notification}>
        <Alert color={checkDarkState(isDark, "dark", "success")}>
          Caught Successfully!
        </Alert>
      </Modal>
    </div>
  );
}
