import './HomePage.css';
import Navbar from '../components/Navbar';
import MilkCard from '../components/MilkCard';
import { useState } from 'react';
import Milk from '../types';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

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
  const milkTypesArray: string[] = [];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.milks.slice(indexOfFirstPost, indexOfLastPost); 


  return (
    <div className='HomePage'>
      <Navbar />
      <SearchBar milks={props.milks} setMilkProducts={setMilkProducts} setSearchOn={setSearchOn}/>
      <p className='HomePage__products'>{searchOn ? milkProducts.length : props.milks.length} products</p>
      <MilkCard currentMilkCards={currentPosts} milkProducts={searchOn ? milkProducts : props.milks} />
      <Pagination totalPosts={props.milks.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default HomePage;