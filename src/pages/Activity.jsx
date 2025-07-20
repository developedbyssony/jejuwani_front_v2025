import { useState, useEffect } from "react";
import Posts from "../components/organisms/Board/PostActivity.jsx";
import Pagination from "../components/organisms/Board/Pagination.jsx";
import activityData from "../dummy/Activity_sample.json";

export default function activity() {

    async function getActivityItems() {
        const arr = activityData;
        const init = arr.map((it, idx) => {
            return {
                id: idx + 1,
                title: it.title,
                region: it.address,
                introduction: it.introduction,
                tag: it.tag,
                phone: it.phoneno,
                price:
                    Math.floor((Math.random() * (10000 - 3000 + 1) + 3000) / 10) * 100,
                hit: Math.floor(Math.random() * 10000),
                like: Math.floor(Math.random() * 100),
                review: 0,
                rating: Math.floor(Math.random() * 5),
                region1: it.label,
                region2: it.region2cd,
                imgSrc: it.photoImg,
            };
        });
        setPosts(init);
    }

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getActivityItems();
    }, []);

    const onToggle = (event) => {
        let classList = event.target.closest("td").children[0].classList.length;
        if (classList === 1) {
            let heartNum = event.target
                .closest("td")
                .children[0].classList.add("isActive");
        } else {
            let heartNum = event.target
                .closest("td")
                .children[0].classList.remove("isActive");
        }
    };

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [dataType, setData] = useState(false);


    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };

    console.log(posts);

    return (
        <>
            <div className="landmark-wrap">
                <div className="activity-landmark"></div>
            </div >
            <div className="section">
                <h1 className="page-tit" id="english">
                    Popular activities in Jeju
                </h1>
                <table class="table-re">
                    <caption class="blind">게시판</caption>
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                    </colgroup>
                    <thead>
                        <th scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">지역</th>
                        {dataType == false ? (
                            <th scope="col">가격</th>
                        ) : (
                            <th scope="col">Tag</th>
                        )}
                        {dataType == false ? (
                            <th scope="col">조회수</th>
                        ) : (
                            <th scope="col">번호</th>
                        )}
                        <th scope="col">Tag</th>
                        {dataType == false && <th scope="col">Reservation</th>}
                    </thead>
                    <tbody>
                        <Posts posts={currentPosts(posts)} reverse={onToggle}></Posts>
                    </tbody>
                </table>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={setCurrentPage}
                ></Pagination>
            </div >
        </>
    );
}
