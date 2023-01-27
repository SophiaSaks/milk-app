import './HomePage.css';
import Navbar from '../components/Navbar';
import MilkCard from '../components/MilkCard';
import { useState } from 'react';
import Milk from '../types';
import SearchBar from '../components/SearchBar';

type Props = {
    milks: Milk[];
    setMilks: (newMilks: Milk[]) => void
};

function HomePage(props: Props) {
//   const [query, setQuery] = useState<string>('');
  const [milkProducts, setMilkProducts] = useState<Milk[]>([]);
  const [searchOn, setSearchOn] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.milks.slice(indexOfFirstPost, indexOfLastPost); 

  return (
    <div className='HomePage'>
      <Navbar />
      <SearchBar milks={props.milks} setMilkProducts={setMilkProducts} setSearchOn={setSearchOn}/>
      <p className='HomePage__products'>{props.milks.length} products</p>
      <MilkCard milkProducts={searchOn ? milkProducts : props.milks} />

    </div>
  );
}

export default HomePage;