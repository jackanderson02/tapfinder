import "./Beer.css";

const Beer = () => {
  return (
    <div className="beer-container card">
      <img
        src="https://www.irishcentral.com/uploads/article/126375/icp___Guinness_Pint__Guinness_Storehouse_Tour__Dublin_City_Web_Size.jpg?t=1691178405"
        className="card-img-top"
        alt="Guiness Beer"
      />
      <div className="card-body">
        <h5 className="card-title">Guiness</h5>
        <p className="card-text">Price: £10</p>
      </div>
    </div>
  );
};

export default Beer;
