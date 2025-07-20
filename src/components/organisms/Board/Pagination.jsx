import React from "react";

const pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <button type="button" className="page-control page-prev">
                <img className="ic-chevron" src="../assets/ico_btn_arrow_down.png" alt="prev" />
            </button>

            <ul className="page-list">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            <button type="button" class="page-control page-next">
                <img className="ic-chevron" src="../assets/ico_btn_arrow_down.png" alt="next" />
            </button>
        </div>
    );
};

export default pagination;