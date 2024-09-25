import "./Beer.css";
import PropTypes from 'prop-types';

const Beer = (beer) => {

  // State to store products data
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
    <div className="beer-container card">
      <img
        src={beer.beer_url}
        className="card-img-top"
        alt={beer.name}
      />
      <div className="card-body">
        <h5 className="card-title">Price: {beer.name}</h5>
        <p className="card-text">{beer.type}</p>
      </div>
    </div>
  );
};


Beer.propTypes = {
    beet: 
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        beer_url: PropTypes.string.isRequired
      }).isRequired,
  };
  
export default Beer;
