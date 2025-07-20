import React from 'react';
import Navbar from '../components/organisms/NavBar';
import NavbarLogIn from '../components/organisms/NavBar-login';
import Banner from '../components/organisms/SlideBanner';
import Footer from '../components/organisms/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = (props) => {
    const isAuthorized = localStorage.getItem('token') && localStorage.getItem('authId');
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    return (
        <>
            <div>
                {isMainPage && <Banner />}
            </div>
            {isAuthorized ? (<NavbarLogIn initialCartItem={props.initialCartItem} />) : (<Navbar initialCartItem={props.initialCartItem} />)}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
};

export default Layout;