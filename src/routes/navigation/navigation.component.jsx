import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./navigation.styles.scss";
import { Menu, X } from "lucide-react";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const matches = useMediaQuery("(min-width: 1000px)");
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="main-logo" src={logo} alt="logo" />
        </Link>
        {!matches &&
          <div onClick={toggleNavbar} className="navbar-button">
            <button >{isOpen ? <X size={30} /> : <Menu size={30} />}</button>
          </div>
        }
        {(matches || isOpen) && (
          <div className={matches ? "navlinks-horizontal": "navlinks-vertical"}>
            <Link className="navlink" to="/">
              Főoldal
            </Link>
            <Link className="navlink" to="/events">
              Rendezvényeink
            </Link>
            <Link className="navlink" to="/gallery">
              Galéria
            </Link>
            <Link className="navlink" to="/aboutus">
              Rólunk
            </Link>
            <Link className="navlink" to="/test">
              Test
            </Link>
          </div>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
