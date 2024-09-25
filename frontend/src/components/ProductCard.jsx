import ProductModal from "./ProductModal";
import { useState, useEffect, useContext} from 'react';
import { Button } from "react-bootstrap";
import { BasketContext } from "./BasketContext";
import Cookies from 'js-cookie'

const ProductCard = ({ product }) => {
    const { basket, setBasket } = useContext(BasketContext);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleShowModal = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    useEffect(() => {
        Cookies.set('basket', JSON.stringify(basket), { expires: 1000 });
    }, [basket]);


    const addItemToBasket = (event) => {
        event.stopPropagation();

        //Check if the product already exists in the basket
        if (basket[product.id]) {
            // If it exists, increase the quantity by 1
            const updatedBasket = {
            ...basket,
            [product.id]: {
                ...basket[product.id],
                quantity: basket[product.id].quantity + 1
            }
            };
            setBasket(updatedBasket);
        } else {
            // If it doesn't exist, add it to the basket with a quantity of 1
            const updatedBasket = {
            ...basket,
            [product.id]: { ...product, quantity: 1 }
            };
            setBasket(updatedBasket);
        }
        useEffect(() => {
            Cookies.set('basket', updatedBasket, {expires: 1000})
        }, [updatedBasket])
    };
    

    return(
        <>
            <div className="card" onClick={() => handleShowModal(product)}>
                <img src={`https://via.placeholder.com/150?text=${product.name}`} className="card-img-top" alt={product.name} />
                <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: £{product.price}</p>
                <Button variant="primary" onClick={addItemToBasket}>Add to Basket</Button>
                </div>
            </div>
        {selectedProduct && 
                (<ProductModal selectedProduct={product} handleCloseModal={handleCloseModal}> </ProductModal>)
        }
        

        </>
    )
}

export default ProductCard;