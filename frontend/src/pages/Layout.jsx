import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import BasketLink from '../components/BasketLink';
import { BasketContext } from "../components/BasketContext";
import { House, Book, Mailbox } from 'react-bootstrap-icons';



const Layout = () => {
      const { basket } = useContext(BasketContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">My Website</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home <House></House></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs <Book></Book></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact <Mailbox> </Mailbox></Link>
              </li>
              <li className="nav-item">
                <BasketLink></BasketLink>


              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;