import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { BasketContext } from '../components/BasketContext';

const Basket = () => {
    const { basket } = useContext(BasketContext);

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(basket).map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>£{item.price}</td>
                                <td>£{item.quantity * item.price}</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                </div>
        
            <p><strong>£{Object.values(basket).map(item => item.price).reduce((x, y) => {
                return x + y;
            }, 0)} total</strong></p>
        </>
    );


};

export default Basket;