import React from "react";
import modifyimg from "../../resources/images/pencil.svg";
import "./CardSensorComponent.css";

const ButtonModify = ({ id, delst, mdSensAction }) => {
  return (
    <div>
      <div className="modifybtn" onClick={() => mdSensAction(id)}>
        <img src={modifyimg} alt="" />
      </div>
    </div>
  );
};

export default ButtonModify;
