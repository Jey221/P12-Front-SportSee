//récupération des datas API
import axios from 'axios';

/**
 * It makes a GET request to the server, and returns the data it receives
 * @param id - the id of the user
 * @returns The result of the promise.
 */
export const getUserInfos = async (id) => {
  try {
    const result = await axios.get(`http://localhost:3000/user${id}`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

/**
 * It makes a GET request to the server, and returns the data from the server.
 * @param id - the id of the user
 * @returns An object with a data property that has the array of objects.
 */
export const getActivity = async (id) => {
  try {
    const result = await axios.get(`http://localhost:3000/user${id}/activity`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

/**
 * It takes in a user id, makes a get request to the server, and returns the average number of sessions
 * for that user.
 * @param id - the id of the user
 * @returns The average number of sessions per user.
 */
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

/**
 * It makes a GET request to the server, and returns the data from the server.
 * @param id - the id of the user
 * @returns The result of the axios.get request.
 */
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
