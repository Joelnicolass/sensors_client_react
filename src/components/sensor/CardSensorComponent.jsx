import { useState } from "react";
import "./CardSensorComponent.css";
import sensorImg from "../../resources/images/sensor.svg";
import TempComponent from "./TempComponent";
import Deletebtn from "./DeleteButton.jsx";
import ButtonModify from "./ButtonModify";

const SensorComponent = ({ id, key, name, delst, mdSensAction }) => {
  return (
    <>
      <div className="sensorCard">
        <Deletebtn id={id} delst={delst} />
        <ButtonModify id={id} delst={delst} mdSensAction={mdSensAction} />
        <div className="nameSenor">
          <h5>{name}</h5>
          <h6>Identificador único: {id}</h6>
        </div>

        <div className="imageSensor">
          <img src={sensorImg} alt="" />
        </div>

        <div className="valueSensor">
          <TempComponent id={id} />
        </div>
      </div>
    </>
  );
};

export default SensorComponent;
