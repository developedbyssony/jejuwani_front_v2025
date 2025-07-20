import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function loginTooltip({ text1, text2, text3, modalCloseL }) {
    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("authId");
    }
    return (
        <div className="my-menu">
            <div className="my-menu-content" id="loginTooltip">
                <div className="my-menu-list">
                    {/* <div className="my-menu-item">
                        <Link to="/my">
                            <button type="button">{text1}</button>
                        </Link>
                    </div> */}
                    <div className="my-menu-item">
                        <Link to="/">
                            <button type="button" onClick={logout}>
                                {text2}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}