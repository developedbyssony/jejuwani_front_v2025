import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";


function Navbar({ initialCartItem }) {
    useEffect(() => {
        console.log(initialCartItem);
    })
    const p = useLocation().pathname;

    function getPath() {
        setPath(p);
    }

    let [modalOpen, setModalOpen] = useState(false);
    const modalClose = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <>
            <h2 className="visually-hidden">메뉴</h2>
            <div className="navbar">
                <div className="navbar-wrap">
                    <div className='navbar-menu-div'>
                        <Link to="/"><h1 className="logo"></h1></Link>
                        <ul>
                            <li>
                                <Link to="/pages/activity" className="menu text-style-18" aria-label="관광지 페이지로 이동">관광지</Link>
                            </li>
                            <li>
                                <Link to="/pages/restaurant" className="menu text-style-18" aria-label="맛집 페이지로 이동">맛집</Link>
                            </li>
                            <li>
                                <Link to="/pages/Car" className="menu text-style-18" aria-label="렌트카 페이지로 이동">렌트카</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='navbar-menu-right'>
                        <Link to="/cart"><h1 className="cart"></h1></Link>
                        <button className="btn-primary btn-40" id="nav-btn-write" onClick={modalClose} aria-label="로그인 페이지로 이동"><Link to="/pages/Login">로그인</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;