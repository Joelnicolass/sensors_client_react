import React, { useEffect, useState } from "react";
import delimg from "../../resources/images/delete.svg";
import "./CardSensorComponent.css";
import { updateSensor } from "../../services/sensorsServices";

const ModifySensor = ({ delst, mdSens }) => {
  const [data, setData] = useState({
    id: "",
    nombre: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const updSensor = async (id, name) => {
    const del = await updateSensor(id, name);
    delst();
  };

  const a = `Modificar sensor ${mdSens}`;

  const sendData = (e) => {
    e.preventDefault();
    data.id = mdSens;
    updSensor(data.id, data.nombre);
  };

  return (
    <div>
      <form onSubmit={sendData}>
        <input
          type="text"
          name="nombre"
          id="nombre"
          onChange={handleInputChange}
        />
        <input type="submit" value={a} />
      </form>
    </div>
  );
};

export default ModifySensor;
