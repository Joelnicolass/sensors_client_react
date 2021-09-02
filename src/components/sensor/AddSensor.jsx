import React, { useEffect, useState } from "react";
import delimg from "../../resources/images/delete.svg";
import "./CardSensorComponent.css";
import { createSensor } from "../../services/sensorsServices";

const AddButton = ({ name, delst }) => {
  const [data, setData] = useState({
    nombre: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = (e) => {
    e.preventDefault();
    addSensor(data.nombre);
  };

  const addSensor = async (name) => {
    const del = await createSensor(name);
    delst();
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
        <input type="submit" value="Añadir Sensor" />
      </form>
      {/*       <div className="deleteBtn" onClick={() => addSensor(id)}>
        <img src={delimg} alt="" />
      </div> */}
    </div>
  );
};

export default AddButton;
