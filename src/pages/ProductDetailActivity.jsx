import { useState, useEffect } from "react";
import ProductShow from "../components/templates/ProductShowActi";
//import Commentwrite from "../Commentwrite";
import { useLocation } from "react-router-dom";

export default function detail({ serverURL }) {
    const location = useLocation();
    const [data, setData] = useState([location.state?.post || null]);

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
            <ProductShow
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