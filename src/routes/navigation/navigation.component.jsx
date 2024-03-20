import { Fragment, useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./navigation.styles.scss";
import { Menu, X } from "lucide-react";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import { AppDataContext } from "../../contexts/pages/app-data.context";
const Navigation = () => {
  const { pages } = useContext(AppDataContext);
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
        {!matches && (
          <div onClick={toggleNavbar} className="navbar-button">
            <button>{isOpen ? <X size={30} /> : <Menu size={30} />}</button>
          </div>
        )}
        {(matches || isOpen) && (
          <div
            className={matches ? "navlinks-horizontal" : "navlinks-vertical"}
          >
            <Link className="navlink" to="/main">
              Főoldal
            </Link>
            {pages.map((page, index) => {
              return (
                <Link key={index} className="navlink" to={page.link}>
                  {page.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
