import './App.css';
import Navbar from './components/Navbar';
import MilkCard from './components/MilkCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Milk from './types';

function App() {
  const [milks, setMilks] = useState<Milk[]>([]);

  const getMilks = () => {
    axios.get('http://localhost:3001/')
    .then(res => {
      setMilks(res.data.results);
      console.log(res.data);
  })
  .catch(err => {
      console.log(err)
  })
  }

  useEffect(() => {
    getMilks();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <MilkCard milkProducts={milks} />

    </div>
  );
}

export default App;
