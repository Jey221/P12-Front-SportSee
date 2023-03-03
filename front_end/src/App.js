import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LayoutVertical from './components/LayoutVertical';
import Home from './page/Home';
import Profil from './page/Profil';

function App() {
  return (
    <div className="App">
      <Header />
      <LayoutVertical />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
