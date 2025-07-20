import { useState, useEffect } from "react";
import BlogList from "../components/organisms/Blog/BlogList";
import mainBlogData from "../dummy/MainBlogData.json";
import Slider3 from "../components/organisms/Slide3";
import Tab from "../components/atoms/Tab";

function blog() {
    let [BlogData, setBlogData] = useState([]);

    async function getBlogItems() {
        setBlogData(mainBlogData);
        return BlogData;
    }

    useEffect(() => {
        getBlogItems();
    }, []);

    const eventKey1 = "emotionalJJ";
    const eventKey2 = "famillyJJ";
    const eventKey3 = "exctingJJ";
    const eventKey4 = "healingJJ";
    const eventKey5 = "restaurantJJ";
    const eventKey6 = "naturalJJ";
    const likeCate1 = "감성 제주";
    const likeCate2 = "가족과 제주";
    const likeCate3 = "익사이팅 제주";
    const likeCate4 = "힐링 제주";
    const likeCate5 = "찐맛 제주";
    const likeCate6 = "내추럴 제주";

    return (
        <div>
            <div className="my-following-section">
                <p className="text-style-18" id="blog-sub-tit">
                    오늘의 핫한 와너들
                </p>
                <h1 className="page-tit" id="main-tit">
                    7월의 베스트 Wanner
                </h1>
                <Slider3 data={BlogData}></Slider3>
                <div className="section">
                    <div className="following-post">
                        <Tab
                            tapTitle1={likeCate1}
                            tapTitle2={likeCate2}
                            tapTitle3={likeCate3}
                            tapTitle4={likeCate4}
                            tapTitle5={likeCate5}
                            tapTitle6={likeCate6}
                            contents1={<BlogList data={BlogData} sort={1} />}
                            contents2={<BlogList data={BlogData} sort={2} />}
                            contents3={<BlogList data={BlogData} sort={3} />}
                            contents4={<BlogList data={BlogData} sort={4} />}
                            contents5={<BlogList data={BlogData} sort={5} />}
                            contents6={<BlogList data={BlogData} sort={6} />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default blog;