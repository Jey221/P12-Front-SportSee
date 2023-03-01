//récupération des datas API
import axios from 'axios';

export const getUserInfos = async (id) => {
  console.log('id', id);

  try {
    const result = await axios.get(`http://localhost:3000/user${id}`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

/* export const getNutriments = async (id) => {
  console.log('id', id);
  try {
    const result = await axios.get(`http://localhost:3000/user${id}`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
 */

/* import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3000/user/12'

function GetDatas() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3000/user/12');

      setData(result.data);
    };
    fetchData();
  });
  console.log(data);
  return data;
}

export default GetDatas;
 */
