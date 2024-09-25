import "./Beer.css";
import PropTypes from 'prop-types';

const Beer = (beer) => {


  // State to store products data
  return (
    <div key={beer.id} className="beer-container card">
      <img
        src={beer.beer_url}
        className="card-img-top"
        alt={beer.name}
      />
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <p className="card-text">{beer.type}</p>
      </div>
    </div>
  );
};

export default Beer;
