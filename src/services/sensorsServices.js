import axios from "axios";
const baseUrl = "http://localhost:5000";

export const getAllSensors = async () => {
  try {
    const respuesta = await axios.get(`${baseUrl}/sensors/list`);
    return respuesta.data;
  } catch (error) {
    console.log("Error inesperado en la petición GET");
    return [];
  }
};
export const getInfoSensorById = async (id) => {
  try {
    const respuesta = await axios.get(`${baseUrl}/sensors/getinfo/${id}`);

    return respuesta.data;
  } catch (e) {
    console.log(`Error inesperado al obtener datos del sensor: ID: ${id}`);
    return [];
  }
};
export const deleteSensor = async (id) => {
  try {
    const data = JSON.stringify({
      id: id,
    });

    const config = {
      method: "delete",
      url: `${baseUrl}/sensors/del`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const respuesta = await axios(config);
    return respuesta;
  } catch (e) {
    console.log(`Error inesperado al intentar eliminar`);
    return [];
  }
};

export const createSensor = async (name) => {
  try {
    const data = JSON.stringify({
      nombre: name,
    });

    const config = {
      method: "post",
      url: `${baseUrl}/sensors/create`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const respuesta = await axios(config);
    return respuesta.data;
  } catch (e) {
    console.log(`Error inesperado en la creación del sensor`);
    return [];
  }
};

export const updateSensor = async (id, name) => {
  try {
    const data = JSON.stringify({
      id: id,
      nombre: name,
    });

    const config = {
      method: "put",
      url: `${baseUrl}/sensors/upd`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const respuesta = axios(config);
    return respuesta.data;
  } catch (e) {
    console.log(`Error inesperado en actualización`);
    return [];
  }
};
