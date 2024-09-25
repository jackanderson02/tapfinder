import "./Beer.css";
import PropTypes from 'prop-types';

const Beer = ({beer}) => {


  // State to store products data
  return (
  <div key={beer.id} className="beer-card">
      <img  src={beer.beer_url} className="beer-image" alt={beer.name} />
      <div>
      <h5 >{beer.name}</h5>
      <p >Type: {beer.type}</p>
      {/* <p >Price: £{5}</p> */}
      </div>
  </div>
    // <div key={beer.id} className="beer-container card">
    //   <img
    //     src={beer.beer_url}
    //     className="card-img-top"
    //     alt={beer.name}
    //   />
    //   <div className="card-body">
    //     <h5 className="card-title">{beer.name}</h5>
    //     <p className="card-text">{beer.type}</p>
    //   </div>
    // </div>
  );
};


Beer.propTypes = {
    beer: 
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
        // beer_url: PropTypes.string.def
    }).isRequired,
};

export default Beer;
