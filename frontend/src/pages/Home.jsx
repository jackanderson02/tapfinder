import { useState, useEffect } from "react";
import PubList from "../components/PubsList"; // Import the presentational component
import Map from "../components/Map";

const Home = () => {
  // State to store products data
  const [pubs, setPubs] = useState([]);

  const fetchPubs = async () => {
    // For now just return some dummy data
    const initialPubs = [
      {
        id: 1,
        name: "The Winchester",
        open_time_hour: 11,
        close_time_hour: 20,
        pub_url:
          "https://movie-locations.com/movies/s/Shaun-Of-The-Dead-Monson-Road.jpg",
      },
      {
        id: 2,
        name: "The Boozer",
        open_time_hour: 8,
        close_time_hour: 23,
        pub_url:
          "https://cdn.prod.website-files.com/647991321943a79a7deddbb2/65ed8f0da756275eb6db2308_655f32e7367b50bb663da593_%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%258F%2596%25E7%2595%25AB%25E9%259D%25A2%25202023-11-23%2520190920.png",
      },
      {
        id: 3,
        name: "Sinclair Arms",
        open_time_hour: 17,
        close_time_hour: 18,
        pub_url: "",
      },
    ];

    setPubs(initialPubs);
  };

  useEffect(() => {
    fetchPubs(); // Call fetchPubs when the component mounts
  }, []); // Empty dependency array ensures this runs only once


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


  return (
    <>
      <h2>Welcome to Tapfinder</h2>
      <PubList pubs={pubs} beers={beers}></PubList>
      <Map></Map>
    </>
  );
};

export default Home;
