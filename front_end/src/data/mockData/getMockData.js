import Datas from './mockData.json';

// recupération des datas du json
const USER_MAIN_DATA = Datas.USER_MAIN_DATA;
const USER_ACTIVITY = Datas.USER_ACTIVITY;
const USER_AVERAGE_SESSIONS = Datas.USER_AVERAGE_SESSIONS;
const USER_PERFORMANCE = Datas.USER_PERFORMANCE;
// calories en Kilo calories
const kcal = USER_MAIN_DATA[0].keyData.calorieCount * 0.001;
// mise en place des scores en %
const score = [
  { value: USER_MAIN_DATA[0].todayScore * 100 },
  { value: 100 - USER_MAIN_DATA[0].todayScore * 100 },
];

export {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
  kcal,
  score,
};
