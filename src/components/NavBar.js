/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BiLogoFacebook, BiLogoVimeo, BiLogoTwitter, BiLogoPinterestAlt, BiLogoGooglePlus,
} from 'react-icons/bi';
import '../styling/NavBar.css';

const NavBar = () => {
  const params = useLocation();
  const [open, setOpen] = useState(true);
  const [mobopen, setmobOpen] = useState(true);

  const logOut = () => {
    localStorage.removeItem('username');
  };

  useEffect(() => {
    setOpen(true);
  }, [params]);

  const isSplashPage = params.pathname === '/';

  if (!open || isSplashPage) {
    return null;
  }

  const isLoginPage = params.pathname === '/login';

  if (!open || isLoginPage) {
    return null;
  }

  const isRegisterPage = params.pathname === '/register';

  if (!open || isRegisterPage) {
    return null;
  }

  return (
    <>
      <div className="mobile">
        <button
          className="ham-menu"
          type="button"
          onClick={() => setmobOpen(!mobopen)}
        >
          {!mobopen ? (
            <>
            </>
          ) : (
            <svg viewBox="0 0 100 80" width="20" height="20" fill="black">
              <rect width="100" height="10" />
              <rect y="30" width="100" height="10" />
              <rect y="60" width="100" height="10" />
            </svg>
          )}
        </button>

      </div>
      <ul className={`nav ${mobopen && 'open'}`}>
        <div className="logo">
          <div className="content">
            <h2 className="nav-h2">
              Classic Rental
              <br />
              Houses
            </h2>
          </div>
        </div>
        <p className="close-btn" onClick={() => { setmobOpen(!mobopen); }}>X</p>
        <div className="links">
          <li className={`${params.pathname.split('/')[1] === 'homepage' && 'active'}`}>
            <Link className="link" to="/homepage" onClick={() => { setmobOpen(!mobopen); }}>
              HOME PAGE
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'ReservationForm' && 'active'
            }`}
          >
            <Link className="link" to="/reservation-form" onClick={() => { setmobOpen(!mobopen); }}>
              MAKE RESERVATION
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'ReservationList' && 'active'
            }`}
          >
            <Link className="link" to="/reservations" onClick={() => { setmobOpen(!mobopen); }}>
              MY RESERVATIONS
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'add-house' && 'active'
            }`}
          >
            <Link className="link" to="/add-house" onClick={() => { setmobOpen(!mobopen); }}>
              ADD HOUSE
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'delete-house' && 'active'
            }`}
          >
            <Link className="link" to="/delete-house" onClick={() => { setmobOpen(!mobopen); }}>
              DELETE HOUSE
            </Link>
          </li>
        </div>
        <div className="lower-nav">
          <li>
            <Link className="link" onClick={logOut} to="/">
              Log Out
            </Link>
          </li>
          <li>
            <ul className="social">
              <li>
                <Link to="/#">
                  <BiLogoTwitter />
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <BiLogoFacebook />
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <BiLogoGooglePlus />
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <BiLogoVimeo />
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <BiLogoPinterestAlt />
                </Link>
              </li>
            </ul>
          </li>
          <li className="copyright">
            <p>© Microverse 2023</p>
          </li>
        </div>
      </ul>
    </>
  );
};

export default NavBar;
