import { useState, useEffect } from "react";
import Star from "../atoms/Star";

function rating({ total = 5, rating }) {
    useEffect(() => {
        selectedStars(rating);
    }, [rating]);
    const [selectedStar, selectedStars] = useState(rating);
    const createArray = (length) => [...Array(length)];
    return (
        <>
            <div className="star-rating-13">
                {createArray(total).map((n, i) => (
                    <Star key={i} selected={selectedStar > i} />
                ))}
            </div>
        </>
    );
}

export default rating;