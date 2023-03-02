//récupération des datas API
import axios from 'axios';

// récupération des datas pour les infos
export const getUserInfos = async (id) => {
  try {
    const result = await axios.get(`http://localhost:3000/user${id}`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

// récupération des datas pour le graphique Activity
export const getActivity = async (id) => {
  try {
    const result = await axios.get(`http://localhost:3000/user${id}/activity`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

// récupération des datas pour le graphique Average
export const getAverage = async (id) => {
  try {
    const result = await axios.get(
      `http://localhost:3000/user${id}/average-sessions`
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

// récupération des datas pour le graphique Performance
export const getPerformance = async (id) => {
  try {
    const result = await axios.get(
      `http://localhost:3000/user${id}/performance`
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
