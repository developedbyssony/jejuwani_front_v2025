import { useState } from "react";

function Star({ selected = false }) {
    return (
        <>
            {selected ? (
                <img src="../assets/icon/star_yellow.png" />
            ) : (
                <img src="../assets/icon/star_gray.png" />
            )}
        </>
    );
}

export default Star;