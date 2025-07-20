import React from 'react';

const Button = ({ styleClass, onClick, label }) => {
    return (
        <>
            <button
                className={styleClass}
                type="button"
                onClick={onClick}
            >
                {label}
            </button>
        </>
    );
};

export default Button;
