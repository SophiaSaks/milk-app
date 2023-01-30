import './ProductPage.css';
import Milk from '../types';
import Navbar from '../components/Navbar';
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ProductPicture from '../assets/milk.png';
import { Slider } from '@mui/material';


type Props = {
  milks: Milk[];
  setMilks: (newMilks: Milk[]) => void
};

function ProductPage(props:Props) {
  const {milkId} = useParams();
  const location = useLocation();
  const product = location.state;

  return (
    <div className='ProductPage'>
      <Navbar /> 
      <div className='ProductPage__div'>
        <Link className='ProductPage__backLink' to='/' />
        <div className='ProductPage__cardDiv'>
          <img className='MilkCard__img' src={ProductPicture} alt="product picture" />
          <ul>
            <li>
              <p className='ProductPage__titles'>Name:</p>
              <p className='ProductPage__info'>{product.name} </p>
            </li>
            <li>
              <p className='ProductPage__titles'>Type:</p>
              <p className='ProductPage__info'>{product.type}</p>
            </li>
            <li>
              <p className='ProductPage__titles'>Storage:</p>
              <p className='ProductPage__info'>{product.storage} </p>
            </li>
          </ul>
        </div>
          <div className='ProductPage__slider'>
          <Slider
              defaultValue={30}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={100}
              color="secondary"
          />

          <button className='ProductPage__btn'>Add to Cart</button>
          </div>

    
      </div>
        
    </div>
  );
}

export default ProductPage;