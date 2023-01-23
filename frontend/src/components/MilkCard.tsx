import './MilkCard.css';
import Milk from '../types'; 

type Props = {
    milkProducts: Milk[] 
}

function MilkCard(props: Props) {
  return (
    <div className='MilkCard'>
        {
            props.milkProducts.map((product: Milk) => 
            <div key={product.id} className='MilkCard__div'>
                <img className='MilkCard__img' src='../assets/milk' alt="product picture" />
                <p >{product.name}</p> 
            </div>)
        }
    </div>
  );
}

export default MilkCard;