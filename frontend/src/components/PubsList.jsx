import PropTypes from 'prop-types'
import './PubsList.css'
// import OutOfStockCard from './OutOfStockCard';
import ClosedCard from './ClosedCard'
import PubCard from './PubCard';
import { useState, useEffect } from 'react';

const PubsList = ({ pubs, beers}) => {
    return (
    <>
      <h3>Available pubs</h3>
      <div className="row">
        {pubs.map(pub=> (
          <div key={pub.id} className="col-md-4 mb-3">
            {((new Date).getHours() >= pub.open_time_hour && (new Date).getHours() < pub.close_time_hour)? (
                        <PubCard pub={pub} />
                    ) : (
                        <ClosedCard pub={pub} />
                )}
          </div>
        ))}
      </div>
    </>
  );


};

PubCard.propTypes = {
    pub: 
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        open_time_hour: PropTypes.number.isRequired,
        close_time_hour: PropTypes.number.isRequired,
        pub_url: PropTypes.string.isRequired
    }).isRequired,
};

export default PubsList;