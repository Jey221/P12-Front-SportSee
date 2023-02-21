import './style/App.css';
import { useEffect, useState } from 'react';
import Chart from './components/Chart';

function App() {
  const [data, setData] = useState()
  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch("https://api.coincap.io/v2/assets/?limit=10");
      const data =await response.json()
      console.log(data);
      setData(data.data)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
    hello!!
    <Chart data={data}></Chart>
    </div>
  );
}

export default App;
