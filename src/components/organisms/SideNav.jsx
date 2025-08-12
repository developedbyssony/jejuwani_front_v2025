import { useState, useEffect, useMemo, useCallback } from "react";


export default function car({searchCar}) {
    function accordionClick(event) {
        if (event.target.parentNode.parentNode.nextSibling.classList.length === 1) {
            event.target.parentNode.parentNode.nextSibling.classList.add("on");
            event.target.classList.add("rotate");
            event.target.parentNode.parentNode.classList.add("on");
        } else {
            event.target.parentNode.parentNode.nextSibling.classList.remove("on");
            event.target.classList.remove("rotate");
            event.target.parentNode.parentNode.classList.remove("on");
        }
    }

    const sorts = {
        type: ["SUV", "경차", "세단"],
        fuel: ["전기", "휘발유", "LPG"],
        year: ["2024", "2023", "2022"],
    };
    return (
        <>
                    <ul className="lnb-sorting" style={{ paddingLeft: 0 }}>
            <li>
                <div className="lnb-list-wrap">
                    <p className="ic-car"></p>
                    <div className="list-addon-right" onClick={accordionClick}>
                        <a href="#" className="list-icon arrow"></a>
                    </div>
                </div>
                <div className="sort-list">
                    {sorts.type.map((sort) => (
                        <button
                            type="button"
                            className="sort-item"
                            key={sort}
                            onClick={() => searchCar({ type: sort })}
                        >
                            <span>{sort}</span>
                        </button>
                    ))}
                </div>
            </li>

            <li>
                <div className="lnb-list-wrap">
                    <p className="ic-fuel"></p>
                    <div className="list-addon-right" onClick={accordionClick}>
                        <a href="#" className="list-icon arrow"></a>
                    </div>
                </div>
                <div className="sort-list">
                    {sorts.fuel.map((sort) => (
                        <button
                            type="button"
                            className="sort-item"
                            key={sort}
                            onClick={() => searchCar({ fuel: sort })}
                        >
                            <span>{sort}</span>
                        </button>
                    ))}
                </div>
            </li>

            <li>
                <div className="lnb-list-wrap">
                    <p className="ic-year"></p>
                    <div className="list-addon-right" onClick={accordionClick}>
                        <a href="#" className="list-icon arrow"></a>
                    </div>
                </div>
                <div className="sort-list">
                    {sorts.year.map((sort) => (
                        <button
                            type="button"
                            className="sort-item"
                            key={sort}
                            onClick={() => searchCar({ year: sort })}
                        >
                            <span>{sort}</span>
                        </button>
                    ))}
                </div>
            </li>
        </ul>
        </>
    );
}