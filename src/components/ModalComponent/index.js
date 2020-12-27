//Packages
import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from "reactstrap";

//Components
import ModalTitle from "./ModalTitle";
import ModalBodyContainer from "./ModalBodyContainer";

export default function ModalComponent({ modal, index, isDark, pokemon }) {
  const dispatch = useDispatch();

  const toggle = () =>
    dispatch({
      type: "SET_MODAL",
    });

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} key={index}>
        <ModalTitle pokemon={pokemon} isDark={isDark} />
        <ModalBodyContainer pokemon={pokemon} isDark={isDark} />
      </Modal>
    </div>
  );
}
