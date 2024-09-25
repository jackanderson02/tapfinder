import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList'; // Import the presentational component

const Home = () => {
  // State to store products data
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  // Load in environment variables


  useEffect(() => {
      
      const initialProducts = [
        { id: 1, name: 'Product 1', price: 10, stock_count: 10},
        { id: 2, name: 'Product 2', price: 20, stock_count:0},
        { id: 3, name: 'Product 3', price: 30, stock_count:5},
        { id: 4, name: 'Product 4', price: 40, stock_count:0},
        { id: 5, name: 'Product 5', price: 50, stock_count:1000},
      ];

      setProducts(initialProducts); //assign to our empty array

  }, []);

  const fetchData = async () => {
      try {
        // Fetch data from the API endpoint
        const response = await fetch('https://acr-jack-anderson-e6c9ggghffgsdugq.uksouth-01.azurewebsites.net/api/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  return (
    <>
      <h2>Welcome to our Online Store</h2>

      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
      {/* Render the ProductList component and pass products as props */}
      <ProductList products={products} />
    </>
  );
};

export default Home;