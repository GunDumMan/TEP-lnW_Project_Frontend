import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar({ className }) {
    return (
        <div className={className}>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 col-12" id="mainNav">
                <div class="container px-4 px-lg-5">
                    <Link to="/">
                        <div class="d-flex">
                            <div class="me-1">
                                <img src="./image/bid-shadow.png" class="logo" alt="..." />
                            </div>
                        </div>
                    </Link>
                    <Link to="/" class="fs-3 text-white dropshadow text-decoration">
                        TEP AUCTION
                    </Link>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0 dropshadow fs-5">
                            <li class="nav-item"><a class="nav-link text-white">
                                <Link to="/" class="text-white text-decoration">
                                    Home
                                </Link>
                            </a></li>
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Auction
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-primary">
                                        <li><a class="dropdown-item" href="#">VEHICLES</a></li>
                                        <li><a class="dropdown-item" href="#">WATCHES</a></li>
                                        <li><a class="dropdown-item" href="#">ELECTRONICS</a></li>
                                        <li><a class="dropdown-item" href="#">JEWELRY</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <li class="nav-item"><a class="nav-link text-white" href="#portfolio">Watchlist</a></li>
                        </ul>
                    </div>
                </div>
                <form class="input-group rounded-pill x">
                    <input class="form-control remove-bg rounded-pill search text-white" type="text" placeholder="Search any product..." />
                    <i class="bi bi-search m-2 me-3 text-white text-shadow"></i>
                </form>

                <Link to="/LoginPages">
                    <i class="bi bi-person-bounding-box ms-5 fs-1 text-white"></i>
                </Link>

            </nav >
        </div>
    );
}

export default styled(Navbar)`
@media (prefers-reduced-motion: no-preference) {
    :root {
        scroll-behavior: smooth;
    }
}

.remove-bg {
    background: rgba(245, 3, 3, 0);
}

.navbar {
    padding: 0 10rem 0 10rem;
}

.x::placeholder {
    font-weight: bold;
    color: white;
}

.x {
    border: none;
    width: 30rem;
}

.search{
    border: none;
}

.input-group {
    border: 1px solid#fff;
}

nav {
    z-index: 1000;
    background: #ff8c42;
}

.logo {
    margin-top: -0.8rem;
    width: 3.5rem;
}

.dropdown-item:focus,
.dropdown-item:hover {
    color: #ffffff;
    background-color: #ff8c42;
}

.text-decoration{
    text-decoration: none;
}
`;