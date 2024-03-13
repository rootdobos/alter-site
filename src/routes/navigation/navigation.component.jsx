import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navigation.styles.scss";

const Navigation =()=>{
    return (
        <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <img className="main-logo" src={logo} alt="logo" />
          </Link>
  
          <div className="navlinks">
            <Link className="navlink" to="/">Főoldal</Link>
            <Link className="navlink" to="/events">Rendezvényeink</Link>
            <Link className="navlink" to="/gallery">Galéria</Link>
            <Link className="navlink" to="/aboutus">Rólunk</Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
}
export default Navigation