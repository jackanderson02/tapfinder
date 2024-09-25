import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const OutOfStockCard = ({ product }) => (
    <Card style={{ height: '100%' }}>
      <Card.Img variant="top" src={"https://www.shutterstock.com/shutterstock/photos/1960153762/display_1500/stock-vector-out-of-stock-vector-sign-isolated-on-white-background-1960153762.jpg"} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: £{product.price}</Card.Text>
        <Card.Text>Stock: {product.stock_count}</Card.Text>
      </Card.Body>
    </Card>
);

OutOfStockCard.propTypes = {
    product: 
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock_count: PropTypes.number.isRequired,
      }).isRequired,
  };
  
export default OutOfStockCard;