import { useEffect, useState } from "react";
import { getInfoSensorById } from "../../services/sensorsServices";

const TempComponent = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const infoSensor = await getInfoSensorById(id);
      const infoData = infoSensor.map((item) => {
        let dataSensor = {
          hora: item.hora,
          fecha: item.fecha.toString().slice(0, 10),
          temp: item.temperatura,
        };
        return dataSensor;
      });

      setData(infoData);
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((d, i) => (
        <h6 key={i}>
          {d.fecha}
          <br />
          hs: {d.hora}
          <br />
          {d.temp} °C
        </h6>
      ))}
    </>
  );
};

export default TempComponent;
