import React from "react";

function prevArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow-prev-main" onClick={onClick}>
            <h1 className="ic-prev"></h1>
        </div>
    );
}

export default prevArrow;