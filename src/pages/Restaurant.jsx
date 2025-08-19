import { useState, useEffect } from "react";
import Posts from "../components/organisms/Board/PostRestaurant.jsx";
import Pagination from "../components/organisms/Board/Pagination.jsx";
import restaurantsData from "../dummy/Restaurants_sample.json";

export default function restaurant() {
    async function getRestaurantItems() {
        const arr = restaurantsData;
        const init = arr.map((it, idx) => {
            return {
                id: idx + 1,
                title: it.title,
                region: it.address,
                tag: it.alltag,
                regdate: it.phoneno,
                hit: Math.floor(Math.random() * 100),
                like: Math.floor(Math.random() * 100),
                review: 0,
                rating: Math.floor(Math.random() * 5),
                latitude: it.latitude,
                longitude: it.longitude,
                region1: it.label,
                region2: it.region2cd,
                imgSrc: it.photoImg,
            };
        });
        setPosts(init);
    }
    const [posts, setPosts] = useState([]);

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

    useEffect(() => {
        getRestaurantItems();
    }, []);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [dataType, setData] = useState(true);
const [selectedRegion, setSelectedRegion] = useState("전체");
    const filteredPosts = selectedRegion === "전체"
        ? posts
        : posts.filter(post => post.region1 === selectedRegion);

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
            <div className="landmark-wrap rest">
                <div className="restaurant-landmark"></div>
            </div>
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
                <h1 className="page-tit" id="english">
                    Popular restaurants in Jeju
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
                            <th scope="col">전화번호</th>
                        )}
                        <th scope="col">조회수</th>
                        <th scope="col">Like</th>
                        {dataType == false ? (
                            <th scope="col">Reservation</th>
                        ) : (
                            <th scope="col">Tag</th>
                        )}
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
            </div>
        </>
    );
}
