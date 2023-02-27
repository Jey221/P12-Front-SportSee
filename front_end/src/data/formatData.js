import { useEffect, useState } from 'react';

export default function Datas() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'http://127.0.0.1:5500/front_end/src/data/mockData.json'
      );
      const data = await response.json();
      console.log(data);
      setData(data.data);
    };
    fetchData();
  }, []);
  return data;
}
