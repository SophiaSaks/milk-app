import './ProductPage.css';
import Milk from '../types';

type Props = {
  milks: Milk[];
  setMilks: (newMilks: Milk[]) => void
};

function ProductPage(props:Props) {
  return (
    <div className='ProductPage'>
        
    </div>
  );
}

export default ProductPage;