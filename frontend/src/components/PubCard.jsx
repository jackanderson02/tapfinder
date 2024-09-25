import ProductModal from "./ProductModal";
import { useState, useEffect, useContext} from 'react';
import { Button } from "react-bootstrap";
import { BasketContext } from "./BasketContext";
import Cookies from 'js-cookie'

import Stack from "react-bootstrap/Stack"
import Beer from "./Beer";

const PubCard = ({ pub }) => {
    // const { basket, setBasket } = useContext(BasketContext);
    // const [selectedProduct, setSelectedProduct] = useState(null);

    // const handleShowModal = (product) => {
    //     setSelectedProduct(product);
    // };

    const pubClicked = (pub) => {
        console.log(pub)
    }

    // const handleCloseModal = () => {
    //     setSelectedProduct(null);
    // };

    // useEffect(() => {
    //     Cookies.set('basket', JSON.stringify(basket), { expires: 1000 });
    // }, [basket]);


    return(
        <>
            <div className="card" onClick={() => pubClicked(pub)}>
                <img  src={pub.pub_url} className="card-img-top" alt={pub.name} />
                <div className="card-body">
                <h5 className="card-title">{pub.name}</h5>
                <p className="card-text">Open time: {pub.open_time_hour + ":00"}</p>
                <p className="card-text">Close time: {pub.close_time_hour + ":00"}</p>
                </div>

                
                
            </div>
            <Stack direction="horizontal" gap={0}>
                <Beer beer={beer}></Beer>
                <Beer beer={beer}></Beer>
            </Stack>

        </>
    )
}

export default PubCard;