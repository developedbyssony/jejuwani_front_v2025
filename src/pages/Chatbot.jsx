import { useState, useEffect } from "react";
import popularList from "../dummy/Car_sample.json";
import Posts from "../components/organisms/Board/PostCar";
import Pagination from "../components/organisms/Board/Pagination";

export default function car() {
    useEffect(() => {
        (async () => {
          await getCarList();
        })();
      }, []);

    const [searchList, setList] = useState([]);

    const [userSearch, setAction] = useState(false);
    const [posts, setPosts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(11);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (list) => list.slice(indexOfFirst, indexOfLast);


    function btnToggle(event) {
        setAction(true);
        if (event.target.classList.length === 2) {
            event.target.classList.add("clicked");
        } else {
            event.target.classList.remove("clicked");
        }
    }

    function accordionClick(event) {
        if (event.target.parentNode.parentNode.nextSibling.classList.length === 1) {
            event.target.parentNode.parentNode.nextSibling.classList.add("on");
            event.target.classList.add("rotate");
            event.target.parentNode.parentNode.classList.add("on");
        } else {
            event.target.parentNode.parentNode.nextSibling.classList.remove("on");
            event.target.classList.remove("rotate");
            event.target.parentNode.parentNode.classList.remove("on");
        }
    }

    const sorts = {
        type: ["SUV", "경차", "세단"],
        fuel: ["전기", "휘발유", "LPG"],
        year: ["2024", "2023", "2022"],
    };

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
    
    async function searchCar(data, event) {
        event.preventDefault();
        btnToggle(event);
        const match = (car) => car.type === data.sort || car.fuel === data.sort || car.year === data.sort;
        const filtered = posts.filter(match);
        setList(filtered);
        setCurrentPage(1); 
        setAction(true);
        }

    return (
        <>
            <div className="section" style={{ paddingLeft: "0px" }}>
                <div className="section-main-activity-sorting">
                    <ul className="section-top-sorting">
                        <li>
                            <h1 className="page-tit">
                                AI 챗봇
                            </h1>
                        </li>
                    </ul>
                </div>
                <div className="section car">
                    <div className="content-display">
                        <div className="section-main-activity-sorting">
                            <h1>새로운 기능을 준비중입니다.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}