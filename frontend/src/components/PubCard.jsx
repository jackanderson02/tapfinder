import ProductModal from "./ProductModal";
import { useState, useEffect, useContext} from 'react';
import { Button } from "react-bootstrap";
import { BasketContext } from "./BasketContext";
import Cookies from 'js-cookie'

import Stack from "react-bootstrap/Stack"
import Beer from "./Beer";

const PubCard = ({ pub}) => {

    const [beers, setBeers] = useState([]);

    const fetchBeers = async () => {
        // For now just return some dummy data
        const initialBeers= [
        {id: 1, name: "Thatchers", type : "cider"},
        {id: 2, name: "Guiness", type : "Stout"},
        {id: 3, name: "Fosters", type : "Lager"},
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
            <Stack direction="horizontal" spacing={0} gap={1}>
                {
                    beers.map((beer) => (
                        <Beer beer={beer}></Beer>
                    ))
                }

            </Stack>
                
                
            

        </>
    )
}

export default PubCard;