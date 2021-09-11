import React from "react";
import Backdrop from "./Backdrop";
import "./Modal.scss";
import Overlay from "./Overlay";

const defaultProps = {};

const Modal = (props) => {
  return (
    <>
      <Backdrop onClick={props.onCloseModal} />
      <Overlay
        selectedFilters={props.selectedFilters}
        genres={props.genres}
        onClickApply={props.onCloseModal}
        setFilterList={props.setFilterList}
      />
    </>
  );
};

Modal.defaultProps = defaultProps;

export default Modal;
