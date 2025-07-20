import { useState, useEffect } from "react";
//import KakaoMapScript from "../service/kakaoMapScript";

function tab({
    tapTitle3,
    tapTitle4,
    tapTitle5,
    tapTitle6,
    tapTitle1,
    tapTitle2,
    contents1,
    contents2,
    contents3,
    contents4,
    contents5,
    contents6,
}) {
    const width = "100%";
    const [search, searchStart] = useState(false);
    const [inputText, setInputText] = useState("");
    const [place, setPlace] = useState("");

    useEffect(() => {
        const div_list = document.querySelectorAll(".nav-list");

        div_list.forEach(function (btn, idx, arr) {
            btn.addEventListener("click", () => {
                console.log("click");
                div_list.forEach((otherTab) => {
                    otherTab.classList.remove("on");
                });
                btn.classList.add("on");
            });
        });
    }, []);

    const onChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(inputText);
        setInputText("");
    };

    const [currentTabIndex, setCurrentTabIndex] = useState(1);
    return (
        <div className="tab-wrapper">
            <ul className="nav">
                <li className="nav-list">
                    <button onClick={() => setCurrentTabIndex(1)}>
                        <span className="text-style-20">{tapTitle1}</span>
                    </button>
                </li>
                <li className="nav-list">
                    <button onClick={() => setCurrentTabIndex(2)}>
                        <span className="text-style-20">{tapTitle2}</span>
                    </button>
                </li>
                <li className="nav-list">
                    <button onClick={() => setCurrentTabIndex(3)}>
                        <span className="text-style-20">{tapTitle3}</span>
                    </button>
                </li>
                <li className="nav-list">
                    <button onClick={() => setCurrentTabIndex(4)}>
                        <span className="text-style-20">{tapTitle4}</span>
                    </button>
                </li>
                <li className="nav-list">
                    <button onClick={() => setCurrentTabIndex(5)}>
                        <span className="text-style-20">{tapTitle5}</span>
                    </button>
                </li>
                <li className="nav-list">
                    <button onClick={() => setCurrentTabIndex(6)}>
                        <span className="text-style-20">{tapTitle6}</span>
                    </button>
                </li>
            </ul>
            <div className="tab-content">
                <div className="searchInfo">
                    <div className="section">
                        <h1 className="page-tit">제주도 지역별 추천 명소 키워드 검색</h1>
                        <div class="map-group">
                            {/*
                            <KakaoMapScript searchPlace={place} width={width} />
                            */}
                            <div className="map-contents">
                                <div className="search-tag">
                                    <p className="tag-orange">#사려니숲길</p>
                                    <p className="tag-orange">#제주불빛정원</p>
                                    <p className="tag-orange">#애월항</p>
                                    <p className="tag-orange">#한담해안산책로</p>
                                    <p className="tag-orange">#아르떼뮤지엄</p>
                                </div>
                                <div className="keyword-search" id="keyword-search">
                                    <div>
                                        <form className="input-group" onSubmit={handleSubmit}>
                                            <input
                                                class="form-input"
                                                type="text"
                                                id="keyword"
                                                placeholder="키워드 검색"
                                                onChange={onChange}
                                            />
                                            <button type="submit">
                                                <div class="ic-search"></div>
                                            </button>
                                        </form>
                                    </div>
                                    <ul id="placesList">
                                        <div className="default-sec-search">
                                            <p className="text-style-13" id="search-inner-txt">
                                                검색어를 입력해주세요
                                            </p>
                                        </div>
                                        {search && <div id="pagination"></div>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-item-wrapper">
                    {currentTabIndex == 1 && <div>{contents1}</div>}
                    {currentTabIndex == 2 && <div>{contents2}</div>}
                    {currentTabIndex == 3 && <div>{contents3}</div>}
                    {currentTabIndex == 4 && <div>{contents4}</div>}
                    {currentTabIndex == 5 && <div>{contents5}</div>}
                    {currentTabIndex == 6 && <div>{contents6}</div>}
                </div>
            </div>
        </div>
    );
}

export default tab;