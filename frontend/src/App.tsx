import './App.css';
import Navbar from './components/Navbar';
import MilkCard from './components/MilkCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Milk from './types';
import SearchBar from './components/SearchBar';

function App() {
  const [milks, setMilks] = useState<Milk[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(9);

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); 

  return (
    <div className='App'>
      <Navbar />
      <SearchBar />
      <p className='App__products'>{milks.length} products</p>
      <MilkCard milkProducts={milks} />

    </div>
  );
}

export default App;
