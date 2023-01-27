import './SearchBar.css';
import Milk from '../types';
import { ChangeEvent, MouseEvent, useEffect } from 'react';

type Props = {
  milks: Milk[];
  setMilkProducts: (newMilks: Milk[]) => void;
  setSearchOn: (value: boolean) => void;
};

function SearchBar(props:Props) {

  /* useEffect(() => {

  },[]) */

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setSearchOn(true);
    if (e.target.value === '') {
      return props.setSearchOn(false);
    }
    return props.setMilkProducts(props.milks.filter((milkProduct: Milk) => milkProduct.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  const getMilkTypes = (milkArray: Milk[]) => {
    const tempArray: string[] = [];
    milkArray.forEach((milk: Milk) => {
        if (tempArray.includes(milk.type)) {
            return;
        }
        tempArray.push(milk.type);
    })
    return tempArray.sort(); 
}

/* const dropdownHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.nextElementSibling!.className === 'hide') {
        return e.currentTarget.nextElementSibling!.className = 'dropdown';
    }
    return e.currentTarget.nextElementSibling!.className = 'hide';
} */

const filterHandler = (e: MouseEvent<HTMLInputElement>) => {
  const target = e.target as HTMLInputElement;
  if (target.checked) {
    props.setSearchOn(true);
    return props.setMilkProducts(props.milks.filter((milkProduct: Milk) => milkProduct.type === target.name));
  }
}

  return (
    <div className='SearchBar'>
        <form className='SearchBar__form'>
          <input type='text' placeholder='Search' className='SearchBar__input' id='searchInput' onChange={searchHandler} />
        </form>

            <div className="filterDiv" /* onClick={dropdownHandler} */>
                <p className='filter'>Filter</p>
            
            <section className='hide'>
                {getMilkTypes(props.milks).map((milkType: string) => 
                    <div className='typeCheckbox' key={milkType}>
                        <input type="checkbox" id={milkType} name={milkType} onClick={filterHandler}></input>
                        <label htmlFor={milkType}>{milkType}</label>
                    </div>
                )}
              </section>
            </div>
    </div>
  );
}

export default SearchBar;