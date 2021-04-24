import React from "react";
import classes from "./modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCLose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function Model(props) {
  const portalElement = document.getElementById("overlays");

  return (
    <div>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onCLose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </div>
  );
}

export default Model;
