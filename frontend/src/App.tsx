import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Milk from './types';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

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
    <div className='App'>
       <Routes>
            <Route path='/' element={<HomePage milks={milks} setMilks={setMilks} />} />
            <Route path='/product/:productId' element={<ProductPage milks={milks} setMilks={setMilks} />} />
     </Routes>

    </div>
  );
}

export default App;
