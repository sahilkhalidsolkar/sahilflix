import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
const Navbar = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

    }, [])
    return (
        <div>
            <div className="navbar-fixed ">
                <nav>
                    <div className="nav-wrapper" style={{ background: "#040504" }}>
                        <div className="container">
                            {/* <a href="#" data-target="slide-out" className="sidenav-trigger">
                                <i className="fas fa-bars  left" style={{ fontSize: '1.3rem' }}
                                ></i>
                            </a> */}
                            <Link to="/" className="brand-logo" style={{ color: "#39fc03" }}>SAHILFLIX</Link>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/search" style={{
                                    letterSpacing: '3px',
                                    fontSize: '1.2rem'
                                }}>
                                    <i className="fas fa-search  left" style={{ fontSize: '1.2rem' }}></i>Search</Link></li>
                                {/* <li><Link to="/favourites" style={{
                                    letterSpacing: '3px',
                                    fontSize: '1.2rem'
                                }}
                                ><i className="fas fa-heart  left" style={{ fontSize: '1.2rem' }}></i>Favourites</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* side navbar */}
            {/* <ul id="slide-out" className="sidenav">
                <li><Link to="/search">
                    <i className="fas fa-search  left" style={{ fontSize: '1rem' }}></i>Search</Link></li>
                <li><div className="divider"></div></li>
                <li><Link to="/favourites"><i className="fas fa-heart  left" style={{ fontSize: '1rem' }}></i>Favourites</Link></li>
            </ul> */}
        </div>
    )
}

export default Navbar
