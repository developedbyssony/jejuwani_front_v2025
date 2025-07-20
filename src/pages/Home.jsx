import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Slide1 from '../components/templates/Slide1';
import Slide2 from '../components/organisms/Slide2';
import Slide3 from '../components/organisms/Slide3';
import YoutubeFooter from '../components/organisms/YoutubeFooter';
import activityData from "../dummy/Activity_sample.json";
import restaurantsData from "../dummy/Restaurants_sample.json";
import mainBlogData from "../dummy/MainBlogData.json";
import ProductUnit from "../components/molecules/CardItemBlog";

const Home = () => {
    useEffect(() => {
        getRestaurantItems();
        getProductItems();
        getBlogItems();
        setCartItems(initialCartItem);
    }, []);

    const onToggle = (event) => {
        let classList = event.target.classList.length;
        if (classList === 1) {
            let heartNum = event.target.classList.add("isActive");
            setLikeModalOpen(!likeModalOpen);
        } else {
            let heartNum = event.target.classList.remove("isActive");
        }
    };

    const setCart = () => {
        cart();
    };


    const initialCartItem = localStorage.getItem("cartState")
        ? JSON.parse(localStorage.getItem("cartState"))
        : [];

    let [ProductData, setProductItems] = useState([]);
    let [RestaurantData, setRestaurantItems] = useState([]);
    let [BlogData, setBlogData] = useState([]);
    const [cartItems, setCartItems] = useState(initialCartItem);
    const [activityFilter, setActivityFilter] = useState("전체");


    function cart(productId, productTitle, productPrice) {
        console.log("클릭");
        const count = 1;
        const newCart = [
            {
                id: productId,
                title: productTitle,
                price: productPrice,
                count: count,
            },
        ];
        setCartItems([newCart, ...cartItems]);
        console.log(cartItems);
        localStorage.setItem("cartItem", JSON.stringify(newCart));
        let entryArr = localStorage.getItem("cartState")
            ? JSON.parse(localStorage.getItem("cartState"))
            : [];
        if (entryArr == null) entryArr = [];
        entryArr.push(newCart);
        localStorage.setItem("newCartState", JSON.stringify(cartItems));
    }


    async function getProductItems() {
        const init = activityData.map((it, idx) => {
            return {
                id: idx + 1,
                title: it.title,
                region: it.address,
                introduction: it.introduction,
                tag: it.tag,
                phone: it.phoneno,
                price: Math.floor((Math.random() * (10000 - 3000 + 1) + 3000) / 10) * 100,
                hit: Math.floor(Math.random() * 10000),
                like: Math.floor(Math.random() * 100),
                review: 0,
                rating: Math.floor(Math.random() * 5),
                label: it.label,
                region2: it.region2,
                imgSrc: it.photoImg,
            };
        });
        setProductItems(init);
        return ProductData;
    }

    const handleFilterClick = (region) => {
        setActivityFilter(region);
    };

    const filteredProductData = ProductData.filter((item) => {
        if (activityFilter === "전체") return true;
        return item.label === activityFilter; // 지역명 기준 (예: "제주시", "서귀포시")
    });

    async function getRestaurantItems() {
        const init = restaurantsData.map((it, idx) => {
            return {
                id: idx + 1,
                title: it.title,
                region: it.address,
                tag: it.alltag,
                regdate: it.phoneno,
                hit: Math.floor(Math.random() * 10000),
                like: Math.floor(Math.random() * 100),
                review: 0,
                rating: Math.floor(Math.random() * 5),
                latitude: it.latitude,
                longitude: it.longitude,
                region1: it.label,
                region2: it.region2,
                imgSrc: it.photoImg,
            };
        });
        setRestaurantItems(init);
        return RestaurantData;
    }

    async function getBlogItems() {
        const init = mainBlogData.map((it, idx) => {
            return {
                id: idx + 1,
                title: it.title,
                nick: it.nick,
                uid: it.uid,
                category: it.category,
                imgSrc: it.imgSrc,
                link: it.link,
            };
        });
        setBlogData(init);
        return BlogData;
    }

    const history = useNavigate();
    const view_url = `/detail2/8`;

    return (
        <>
            <div className="mainSlide">
                <Slide1></Slide1>
            </div>
            <div className="wrapper-main acti">
                <div className="section-main-activity">
                    <div className="section-main-activity-tit">
                        <p className="text-style-23" id="main-sub-tit">
                            여행이 돌아왔어요!
                        </p>
                        <p className="text-style-34" id="main-tit">
                            7월에 놓치면
                            <span>후회할 제주 체험</span>
                        </p>
                    </div>
                    <div className="section-main-activity-sorting" id="main-sorting">
                        {["전체", "제주시", "서귀포시", "섬 속의 섬"].map((region) => (
                            <button
                                key={region}
                                className={`tag-orange ${activityFilter === region ? "on" : ""}`}
                                onClick={() => handleFilterClick(region)}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                    <Slide2
                        data={filteredProductData}
                        reverse={onToggle}
                        setCart={setCart}
                        cart={cart}
                    ></Slide2>
                </div>
            </div>

            <div className="wrapper-main rest">
                <div className="section-main-restaurant">
                    <div className="section-main-restaurant-tit">
                        <p className="text-style-23" id="main-sub-tit">
                            리뷰가 인정한 제주도 최고 맛집
                        </p>
                        <h1
                            className="text-style-34"
                            id="main-tit"
                        >
                            맛있고 특별한 제주 여행을 즐겨보세요!
                        </h1>
                        <div className="main-sort-row1">
                            <button class="tag-orange on" onClick={() => {
                                history(view_url, {
                                    state: { post: RestaurantData[8] }
                                })
                            }}>이 달의 맛집 바로가기</button>
                        </div>
                    </div>

                    <div className="section-main-activity-contentsDisplayArea"></div>
                    <Slide3 data={RestaurantData} reverse={onToggle}></Slide3>
                </div>
            </div>
            <div className="section-main-search2"></div>

            <div className="wrapper-main">
                <div className="section-main-restaurant">
                    <div className="section-main-restaurant-tit">
                        <p className="text-style-23" id="main-sub-tit">
                            리뷰가 인정한 제주도 최고 맛집
                        </p>
                        <h1
                            className="text-style-34"
                            id="main-tit"
                        >
                            7월의 베스트 Wanner
                        </h1>
                    </div>

                    <div className="section-main-activity-contentsDisplayArea">
                        <div className="main-slider-product">
                            {BlogData.map((el, index) =>
                                index < 7 && index > 0 ? <ProductUnit item={el} /> : null,
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <YoutubeFooter />
        </>
    );
};

export default Home;
