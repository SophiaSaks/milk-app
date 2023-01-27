import './MilkCard.css';
import Milk from '../types'; 
import ProductPicture from '../assets/milk.png';
import { Link } from 'react-router-dom';

type Props = {
    milkProducts: Milk[]; 
    currentMilkCards:Milk[];
}

function MilkCard(props: Props) {

  return (
   
    <div className='MilkCard'>
      
        {
            props.currentMilkCards.map((product: Milk) => 
            <Link to={`/product/${product.id}`} state={{thumbnail: {ProductPicture}, name: product.name, id: product.id, type: product.type, storage: product.storage }}>
            <div key={product.id} className='MilkCard__div'>
                <img className='MilkCard__img' src={ProductPicture} alt="product picture" />
                <p className='MilkCard__title'>{product.name}</p>
                    <div className='MilkCard__paragraphDiv'> 
                        <p className='MilkCard__milkType'>{product.type}</p> 
                        <p className='MilkCard__liters'>44 Liters</p> 
                    </div>
            </div>
            </Link>)
        }
    </div>
   
  );
}

export default MilkCard;