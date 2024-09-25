import { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { BasketContext } from './BasketContext';
import { Link } from 'react-router-dom';
import { Basket } from 'react-bootstrap-icons';

const BasketLink = () => {
  const { basket } = useContext(BasketContext);
  
  let totalQuantity = 0;
  for (const item of Object.values(basket)) {
    totalQuantity += item.quantity;
  }
    
  return (
    <Nav.Link as={Link} to="/basket">
      <Basket> </Basket>{totalQuantity}
    </Nav.Link>
  );
};

export default BasketLink;