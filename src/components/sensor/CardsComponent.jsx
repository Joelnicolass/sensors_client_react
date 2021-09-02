import React, { useState, useEffect } from "react";
import SensorsCard from "./CardSensorComponent";
import { getAllSensors } from "../../services/sensorsServices";
import AddButton from "./AddSensor";
import ModifySensor from "./ModifySensor";

const CardsComponent = () => {
  const [sensors, setSensors] = useState([]);
  const [delstate, setDelstate] = useState(0);
  const [mdSens, setMdSens] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const sensors = await getAllSensors();
      const sensorsList = sensors.map((item) => {
        let sensor = {
          id: item.id_sensor,
          nombre: item.nombre,
        };

        return sensor;
      });

      setSensors(sensorsList);
    };
    fetchData();
  }, [delstate]);

  const delst = () => {
    setDelstate(delstate + 1);
  };

  const mdSensAction = (id) => {
    setMdSens(id);
  };

  return (
    <>
      <AddButton delst={delst} />
      <ModifySensor delst={delst} mdSens={mdSens} />
      <div className="containerCards">
        {sensors.map((sensor, i) => (
          <SensorsCard
            key={sensor.id}
            id={sensor.id}
            name={sensor.nombre}
            delst={delst}
            mdSensAction={mdSensAction}
          />
        ))}
      </div>
    </>
  );
};

export default CardsComponent;
