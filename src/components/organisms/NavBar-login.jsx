import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Tooltip1 from '../atoms/Tooltip1';
import Tooltip2 from '../atoms/Tooltip2';

function Navbar({ initialCartItem }) {
    const uid = localStorage.getItem('authId');
    let [modalOpen, setModalOpen] = useState(false);
    let [modalOpenL, setModalOpenL] = useState(false);

    const modalClose = () => {
        setModalOpen(!modalOpen);
    }

    const modalCloseL = () => {
        setModalOpenL(!modalOpenL);
    }

    const loginText1 = '마이페이지';
    const loginText2 = '로그아웃';
    const loginText3 = '로그아웃';
    const writeText1 = '블로그 쓰기✏️';
    const writeText2 = '리뷰 쓰기  ✍';
    return (
        <>
            <div className="navbar">
                <div className="navbar-wrap">
                    <div className='navbar-menu-div'>
                        <Link to="/"><h1 className="logo"></h1></Link>
                        <ul>
                            <li>
                                <a className="menu text-style-18" aria-label="챗봇 페이지로 이동"><Link to="/pages/navigation">챗봇</Link></a>
                            </li>
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
                        <div className="navber-menu-right-item">
                            <Link to="/cart"><h1 className="cart"></h1></Link>
                        </div>
                        <div className="navber-menu-right-item">
                            <strong className="menu-right text-style-14" id="uid" onClick={modalCloseL}>{uid}</strong>
                            {
                                modalOpenL && <Tooltip2
                                    text1={loginText1}
                                    text2={loginText2}
                                    modalCloseL={modalCloseL}
                                />
                            }
                        </div>
                        {/* <div className="navber-menu-right-item">
                            <button className="btn-primary btn-40" id="nav-btn-write" onClick={modalClose}>글쓰기<h1 className="i-chevron"></h1></button>
                            {
                                modalOpen && <Tooltip1
                                    text1={writeText1}
                                    text2={writeText2}
                                    modalClose={modalClose}
                                />
                            }
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;