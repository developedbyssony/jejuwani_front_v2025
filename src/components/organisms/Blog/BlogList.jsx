import React from "react";
import BlogPost from "./BlogPost";

function blogList({ data, sort }) {
    return (
        <ul>
            {data.map((my) => (
                <li>
                    <BlogPost post={my} sort={sort} />
                </li>
            ))}
        </ul>
    );
}

export default blogList;