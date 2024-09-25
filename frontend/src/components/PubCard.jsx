import ProductModal from "./ProductModal";
import { useState, useEffect, useContext} from 'react';
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import { BasketContext } from "./BasketContext";
import Cookies from 'js-cookie'

import Stack from "react-bootstrap/Stack"
import Beer from "./Beer";

const PubCard = ({ pub}) => {

    const [beers, setBeers] = useState([]);

    const fetchBeers = async () => {
        // For now just return some dummy data
        const initialBeers= [
        {id: 1, name: "Thatchers", type : "cider", beer_url: "https://www.ukglassware.com/cdn/shop/products/6A8D1564-44B9-4226-BB10-8182673C74E0.jpg?v=1661450365"},
        {id: 2, name: "Guinness", type : "Stout", beer_url:"https://static.standard.co.uk/2022/01/21/18/d9a4ce0ab5b745accc3208b9ff4e1577Y29udGVudHNlYXJjaGFwaSwxNjQyODY4NTkz-2.61189514.jpg?width=1200&height=1200&fit=crop"},
        {id: 3, name: "Fosters", type : "Lager", beer_url:"https://i2-prod.hulldailymail.co.uk/news/uk-world-news/article8592028.ece/ALTERNATES/s810/0_PinPep_Fosters_Campaign_011JPG.jpg"},
        ];

        setBeers(initialBeers);
    };

    useEffect(() => {
        fetchBeers(); 
    }, []); 

    return(
        <>
            <div key={pub.id} className="card" onClick={() => pubClicked(pub)}>
                <img  src={pub.pub_url} className="card-img-top" alt={pub.name} />
                <div className="card-body">
                <h5 className="card-title">{pub.name}</h5>
                <p className="card-text">Open time: {pub.open_time_hour + ":00"}</p>
                <p className="card-text">Close time: {pub.close_time_hour + ":00"}</p>
                </div>
            </div>
            <Stack direction="horizontal" spacing={0} gap={0}>
                {
                    beers.map((b) => (
                        <Beer beer={b}></Beer>
                        // {console.log(beer)}
                    ))
                }

            </Stack>
                
                
            

        </>
    )
}

Beer.propTypes = {
    beer: 
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        beer_url: PropTypes.string
    }).isRequired,
};

export default PubCard;