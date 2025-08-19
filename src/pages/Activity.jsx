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
    const [selectedRegion, setSelectedRegion] = useState("전체");
    const [sortOrder, setSortOrder] = useState(null);

    // 지역 필터링
    let filteredPosts = selectedRegion === "전체"
        ? posts
        : posts.filter(post => post.region1 === selectedRegion);

    // 정렬 처리
    if (sortOrder === "high") {
        filteredPosts = [...filteredPosts].sort((a, b) => b.price - a.price);
    } else if (sortOrder === "low") {
        filteredPosts = [...filteredPosts].sort((a, b) => a.price - b.price);
    }

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
            <div className="category-table-wrap">
                <div className="category-table">
                    {["전체", "제주시", "서귀포시", "섬 속의 섬"].map(region => (
                        <span
                            key={region}
                            onClick={() => setSelectedRegion(region)}
                            style={{
                                fontWeight: selectedRegion === region ? "bold" : "normal",
                                backgroundColor: selectedRegion === region ? "#f3f3f3ff" : "#fff",
                                cursor: "pointer"
                            }}
                        >
                            {region}
                        </span>
                    ))}
                </div>
            </div>
            <div className="section">
                <div className="section-head">
                    <h1 className="page-tit" id="english">
                        Popular activities in Jeju
                    </h1>
                    <div className="acti-filter-wrap">
                        <span
                            className="acti-filter text-style-18"
                            onClick={() => setSortOrder("high")}
                        >
                            가격 높은 순 ▲
                        </span>
                        <span
                            className="acti-filter text-style-18"
                            onClick={() => setSortOrder("low")}
                        >
                            가격 낮은 순 ▼
                        </span>
                    </div>
                </div>
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
                        <Posts posts={currentPosts(filteredPosts)} reverse={onToggle}></Posts>
                    </tbody>
                </table>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={filteredPosts.length}
                    paginate={setCurrentPage}
                ></Pagination>
            </div >
        </>
    );
}
