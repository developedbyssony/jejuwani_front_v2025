import React from "react";

function nextArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow-next-main" onClick={onClick}>
            <h1 className="ic-next"></h1>
        </div>
    );
}

export default nextArrow;