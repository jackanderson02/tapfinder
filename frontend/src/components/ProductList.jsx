import PropTypes from 'prop-types'
import './ProductList.css'
import OutOfStockCard from './OutOfStockCard';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    return (
    <>
      <h3>Our Products</h3>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-3">
            {product.stock_count > 0 ? (
                        <ProductCard product={product} />
                    ) : (
                        <OutOfStockCard product={product} />
                )}
          </div>
        ))}
      </div>
    </>
  );


};

ProductCard.propTypes = {
    product: 
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock_count: PropTypes.number.isRequired,
    }).isRequired,
};
export default ProductList;