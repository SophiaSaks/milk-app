import './SearchBar.css';
import Milk from '../types';
import { ChangeEvent } from 'react';

type Props = {
  milks: Milk[];
  setMilkProducts: (newMilks: Milk[]) => void;
  setSearchOn: (value: boolean) => void;
};

function SearchBar(props:Props) {

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setSearchOn(true);
    if (e.target.value === '') {
      return props.setSearchOn(false);
    }
    return props.setMilkProducts(props.milks.filter((milkProduct: Milk) => milkProduct.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  return (
    <div className='SearchBar'>
        <form className='SearchBar__form'>
          <input type="text" placeholder="Search" className="SearchBar__input" id='searchInput' onChange={searchHandler} />
        </form>

        <div className="SearchBar__filter">
        <p>Filter</p>
        </div>

       
    
    </div>
  );
}

export default SearchBar;