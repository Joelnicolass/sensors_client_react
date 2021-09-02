import React, { useEffect, useState } from "react";
import delimg from "../../resources/images/delete.svg";
import "./CardSensorComponent.css";
import { deleteSensor } from "../../services/sensorsServices";

const DeleteButton = ({ id, delst }) => {
  const delSensor = async (id) => {
    const del = await deleteSensor(id);
    delst();
  };

  return (
    <div>
      <div className="deleteBtn" onClick={() => delSensor(id)}>
        <img src={delimg} alt="" />
      </div>
    </div>
  );
};

export default DeleteButton;
