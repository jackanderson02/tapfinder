import { useState, useEffect } from "react";
import PubList from "../components/PubsList"; // Import the presentational component
import Map from "../components/Map";

const Home = () => {
  // State to store products data
  const [pubs, setPubs] = useState([]);

  const fetchPubs = async () => {
    // For now just return some dummy data
    //   // { id: 2, name: 'Pub 2', price: 20, stock_count: 0 },
    //   // { id: 3, name: 'Pub 3', price: 30, stock_count: 5 },
    //   // { id: 4, name: 'Pub 4', price: 40, stock_count: 0 },
    //   // { id: 5, name: 'Pub 5', price: 50, stock_count: 1000 },
    // ];


    try {
            const response = await fetch('http://localhost:5000/pubs'); // Update with your endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setPubs(result);
        } catch (err) {
            console.log(err)
        }
  };

  useEffect(() => {
    fetchPubs(); // Call fetchPubs when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <h2>Welcome to Tapfinder</h2>
      {/* <PubList pubs={pubs} beers={beers}></PubList> */}
      <Map pubs={pubs}></Map>
    </>
  );
};

export default Home;
