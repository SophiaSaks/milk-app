import './MilkCard.css';
import Milk from '../types'; 
import ProductPicture from '../assets/milk.png';

type Props = {
    milkProducts: Milk[] 
}

function MilkCard(props: Props) {

  return (
    <div className='MilkCard'>
      
        {
            props.milkProducts.map((product: Milk) => 
            <div key={product.id} className='MilkCard__div'>
                <img className='MilkCard__img' src={ProductPicture} alt="product picture" />
                <p className='MilkCard__title'>{product.name}</p>
                    <div className='MilkCard__paragraphDiv'> 
                        <p className='MilkCard__milkType'>{product.type}</p> 
                        <p className='MilkCard__liters'>44 Liters</p> 
                    </div>
            </div>)
        }
    </div>
  );
}

export default MilkCard;