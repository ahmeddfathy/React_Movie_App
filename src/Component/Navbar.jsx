import { Link } from 'react-router-dom';
import styles from '../Navbar.module.css';
import React from 'react'
export default function Navbar() {
return (
<>
<nav className={ `${styles.navBackGround} navbar navbar-expand-lg navbar-dark bg-transparent`}>
    <div className="container-fluid">
<Link className="navbar-brand" to="movies">WE Movies</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="home">Home</Link>
            </li>1
            <li className="nav-item">
                <Link className="nav-link" to="movies">Movies</Link>
            </li>
                <li className="nav-item">
                    <Link className="nav-link" to="tvshow">Tv Shows</Link>
                </li>
            <li className="nav-item">
                    <Link className="nav-link" to="pepole">Pepole</Link>
            </li>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <div className='d-flex justify-content-center align-items-center '>
                    <i className='fa fa-brands fa-facebook mx-1'></i>
                    <i className='fa fa-brands fa-instagram mx-1'></i>
                    <i className='fa fa-brands fa-twitter mx-1'></i>
                    <i className='fa fa-brands fa-spotify mx-1'></i>
                </div>
            </ul>
        </ul>
        </div>
    </div>
</nav>
</>
)
}
