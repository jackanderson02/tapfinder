import Beer from "./Beer";
import "./BeerList.css";

const BeerList = () => {
  return (
    <div className="beer-container">
      <Beer />
      <Beer />
      <Beer />
    </div>
  );
};

export default BeerList;
