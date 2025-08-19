import React from 'react';

const Button = ({ modalClose }) => {
    return (
        <>
            <button
                className="cart-btn-main"
                type="button"
                 onClick={modalClose}
            >
            </button>
        </>
    );
};

export default Button;
