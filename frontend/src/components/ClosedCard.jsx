import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const ClosedCard = ({ pub }) => (
    <Card style={{ height: '100%' }}>
      <Card.Img variant="top" src={"https://www.nationalworld.com/jpim-static/image/2022/08/30/18/GettyImages-1013271918.jpg?width=1200&enable=upscale"} alt={pub.name} />
      <Card.Body>
        <Card.Title>{pub.name}</Card.Title>
        <Card.Text>Open time: {pub.open_time_hour + ":00"}</Card.Text>
        <Card.Text>Close time: {pub.close_time_hour + ":00"}</Card.Text>
      </Card.Body>
    </Card>
);

ClosedCard.propTypes = {
    pub: 
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        open_time_hour: PropTypes.number.isRequired,
        close_time_hour: PropTypes.number.isRequired,
      }).isRequired,
  };
  
export default ClosedCard;