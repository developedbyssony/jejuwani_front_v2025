import { useState, useEffect, useMemo, useCallback } from "react";
import popularList from "../dummy/Car_sample.json";
import Posts from "../components/organisms/Board/PostCar";
import Pagination from "../components/organisms/Board/Pagination";
import SideNav from "../components/organisms/SideNav";

const SORT = {
    POPULAR: "popular",
    PRICE_ASC: "price-asc", // 낮은 가격순
    PRICE_DESC: "price-desc"// 높은 가격순
}

function parsePrice(v) {
    if (typeof v === "number") return v;
    if (!v) return 0;
    // "120,000원/일" 같은 포맷도 커버
    const n = String(v).replace(/[^\d]/g, "");
    return Number(n || 0);
}

export default function car() {
    useEffect(() => {
        const init = popularList.map((it, idx) => ({
            id: idx + 1,
            ...it,
            priceNum: parsePrice(it.price),
            priceLabel: it.price
        }));
        setPosts(init);
    }, []);


    const [searchList, setList] = useState([]);

    const [userSearch, setAction] = useState(false);
    const [posts, setPosts] = useState([]);

    const [criteria, setCriteria] = useState({
        type: null,   // ex) 'SUV'
        fuel: null,   // ex) '휘발유'
        year: null   // ex) '2023' 또는 2023
    });

    const [sortOption, setSortOption] = useState(SORT.POPULAR);


    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(11);


    function btnToggle(event) {
        setAction(true);
        if (event.target.classList.length === 2) {
            event.target.classList.add("clicked");
        } else {
            event.target.classList.remove("clicked");
        }
    }

    async function getCarList() {
        const arr = popularList;
        const init = arr.map((it, idx) => {
            return {
                id: idx + 1,
                type: it.type,
                name: it.name,
                company: it.company,
                fuel: it.fuel,
                year: it.year,
                option: it.option,
                imgSrc: it.imgSrc,
                price: it.price
            };
        });
        setPosts(init);
    }

    const searchCar = useCallback((next) => {
        setCriteria(prev => ({
            ...prev,
            ...next
        }));
         setCurrentPage(1); // 필터가 바뀌면 페이지를 1로
    }, []);

    const filtered = useMemo(() => {
        const { type, fuel, year, keyword } = criteria;

        return posts.filter(car => {
            const matchType = !type || car.type === type;
            const matchFuel = !fuel || car.fuel === fuel;
            const matchYear = !year || String(car.year) === String(year);
            const matchKeyword =
                !keyword ||
                String(car.name).toLowerCase().includes(String(keyword).toLowerCase()) ||
                String(car.company).toLowerCase().includes(String(keyword).toLowerCase());

            return matchType && matchFuel && matchYear && matchKeyword;
        });
    }, [posts, criteria]);

    const sorted = useMemo(() => {
        if (sortOption === SORT.POPULAR) {
            // 인기순: 원본 정렬 유지
            return filtered;
        }
        if (sortOption === SORT.PRICE_ASC) {
            return [...filtered].sort((a, b) =>a.priceNum - b.priceNum);
        }
        if (sortOption === SORT.PRICE_DESC) {
            return [...filtered].sort((a, b) => b.priceNum - a.priceNum);
        }
        return filtered;
    }, [filtered, sortOption]);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = useMemo(
        () => sorted.slice(indexOfFirst, indexOfLast),
        [sorted, indexOfFirst, indexOfLast]
    );
    // 정렬 토글 핸들러
    const handleSortChange = useCallback((opt) => {
        setSortOption(opt);
        setCurrentPage(1);
    }, []);


    return (
        <>
            <div className="section" style={{ paddingLeft: "0px" }}>
                <div className="section-main-activity-sorting">
                    <ul className="section-top-sorting">
                        <li>
                            <h1 className="page-tit">
                                어떤 렌트카 찾으세요?
                            </h1>
                        </li>
                    </ul>
                </div>
                <ul className="sorting-list">
                    <li className={`sorting-item tag-black ${sortOption === SORT.POPULAR ? "on" : ""}`}
                        onClick={() => handleSortChange(SORT.POPULAR)}
                    >인기순</li>
                    <li className={`sorting-item tag-black ${sortOption === SORT.PRICE_ASC ? "on" : ""}`}
                        onClick={() => handleSortChange(SORT.PRICE_ASC)}>낮은 가격순</li>
                    <li className={`sorting-item tag-black ${sortOption === SORT.PRICE_DESC ? "on" : ""}`}
                        onClick={() => handleSortChange(SORT.PRICE_DESC)}>높은 가격순</li>
                </ul>
                <div className="section car">
                    <SideNav searchCar={searchCar}></SideNav>
                    <div className="content-display">
                        <div className="section-main-activity-sorting">
                            <Posts posts={currentPosts} />
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={sorted.length}
                                paginate={setCurrentPage}
                            ></Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}