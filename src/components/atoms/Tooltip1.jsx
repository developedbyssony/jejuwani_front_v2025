import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function writeTooltip({ text1, text2, modalClose }) {
    return (
        <div className="my-menu">
            <div className="my-menu-content">
                <div className="my-menu-list">
                    <div className="my-menu-item">
                        <Link to="/write">
                            <button type="button">{text1}</button>
                        </Link>
                    </div>
                    <div className="my-menu-item">
                        <Link to="/review">
                            <button type="button">{text2}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}