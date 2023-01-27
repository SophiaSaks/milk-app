import './ProductPage.css';
import Milk from '../types';
import Navbar from '../components/Navbar';
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ProductPicture from '../assets/milk.png';



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
              <p>Name:</p>
              <p>{product.name} </p>
            </li>
            <li>
              <p>Type:</p>
              <p>{product.type}</p>
            </li>
            <li>
              <p>Storage:</p>
              <p>{product.storage} </p>
            </li>
          </ul>
        </div>
      </div>
        
    </div>
  );
}

export default ProductPage;