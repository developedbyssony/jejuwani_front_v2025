import { useState, useEffect } from "react";
import ProductShow2 from "../components/templates/ProductShowRest";
//import Commentwrite from "../Commentwrite";
import { useLocation } from "react-router-dom";

function productDetailPageRestaurant({ serverURL }) {
    const location = useLocation();
    const [data, setData] = useState([location.state.post]);

    useEffect(() => {
        console.log(data);
    }, []);

    const onCreate = (author, content, rating) => {
        const newItem = [
            {
                author,
                content,
                rating,
            },
        ];
        setData([...data, newItem]);
        console.log(data);
    };
    return (
        <div>
            <ProductShow2
                serverURL={serverURL}
                product_info={location.state}
                review={data}
            />
            {/* 
            <Commentwrite product_info={data} onCreate={onCreate} />
            */}
        </div>
    );
}

export default productDetailPageRestaurant;