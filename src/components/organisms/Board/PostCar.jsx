import { useState, useEffect } from "react";
import Rating from "../../molecules/RatingStars";
import Modal from "../../organisms/modals/modal";
import DatePicker from "../../atoms/DatePicker";

const posts = ({ posts }) => {
    const p = posts.filter((n) => n.id < 101);
    const [openModalId, setOpenModalId] = useState(null);
    const [userStartDate, setStartDate] = useState();
    const [userEndDate, setEndDate] = useState();

    const parentFunction1 = (x) => {
        setStartDate(x);
        console.log(userStartDate);
    };

    const parentFunction2 = (x) => {
        setEndDate(x);
        console.log(userEndDate);
    };

    const handleModalToggle = (id) => {
        // 같은 걸 누르면 닫기, 다른 걸 누르면 해당 모달 열기
        setOpenModalId((prevId) => (prevId === id ? null : id));
    };

    const modalClose = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <>
            {p.map(function (post, index) {
                return (
                    <div className="productUnit-frame-car">
                        <div className="productUnit-img">
                            <img
                                src={post.imgSrc}
                                alt="카드 UI 이미지"
                                style={{ height: "100%", width: "auto", objectFit: "contain" }}
                            />
                        </div>
                        <div className="productUnit-contents">
                            <div className="rightList">
                                <div className="wrap-col">
                                    <div className="productUnit-contents-tit">
                                        <div className="productLeft">
                                            <span style={{ color: "#000" }}>{post.year}</span>
                                            <div className="product-tit">
                                                <p
                                                    className="unit-tit text-style-24"
                                                    style={{ color: "#000" }}
                                                >
                                                    {post.name}
                                                </p>
                                                <p className="text-style-13 tag-company"
                                                    style={{ marginLeft:"6px"}}>
                                                    {post.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="productUnit-contents-bottom" style={{ display: "flex", flexDirection: "column" }}>
                                        <div className="productLeft">
                                            <span className="price-20">{post.price}</span>
                                            <ul className="text-style-13" style={{ display:"flex",paddingLeft: "0px", margin: "8px 0" }}>
                                                <li>{post.type}</li>
                                                <li>{post.fuel}</li>
                                                <li>{post.option}</li>
                                            </ul>
                                        </div>
                                        <div className="productRight">
                                            <div className="optionListWrap" style={{ marginTop: "10px" }}>
                                                <div className="optionList">
                                                    <ul style={{ paddingLeft: "0" }}>
                                                        <li>
                                                            <input type="checkbox" checked />
                                                            <span>항균소독</span>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" checked />
                                                            <span>열선시트</span>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" />
                                                            <span>썬루프</span>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" />
                                                            <span>에어백</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="optionList">
                                                    <ul>
                                                        <li>
                                                            <input type="checkbox" checked />
                                                            <span>항균소독</span>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" checked />
                                                            <span>열선시트</span>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" />
                                                            <span>썬루프</span>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" />
                                                            <span>에어백</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="optionList">
                                                    <ul>
                                                        <li>
                                                            <input type="checkbox" checked />
                                                            <span>항균소독</span>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" checked />
                                                            <span>열선시트</span>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" />
                                                            <span>썬루프</span>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" />
                                                            <span>에어백</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrap-row">
                                    <div className="date-picker-start">
                                        <span className="ic-check"></span>
                                        <span style={{ marginRight: "8.5px" }}>시작일</span>
                                        <DatePicker
                                            parentFunction1={parentFunction1}
                                            parentFunction2={parentFunction2}
                                        />
                                    </div>
                                    <div className="date-picker-end">
                                        <span className="ic-check"></span>
                                        <span style={{ marginRight: "8.5px" }}>종료일</span>
                                        <DatePicker
                                            parentFunction1={parentFunction1}
                                            parentFunction2={parentFunction2}
                                        />
                                    </div>
                                    <div className="carSafeSec">
                                        <span>자차 보험을 선택해주세요.</span>
                                        <div className="radio-list">
                                            <div className="radio-wrap">
                                                <div className="radio-item">
                                                    <input type="radio" value="1" />
                                                    <span>일반자차</span>
                                                </div>
                                                <div className="radio-item">
                                                    <input type="radio" value="1" />
                                                    <span>완전자차</span>
                                                </div>
                                            </div>
                                            <div className="radio-wrap">
                                                <div className="radio-item">
                                                    <input type="radio" value="1" />
                                                    <span>부분무제한</span>
                                                </div>
                                                <div className="radio-item">
                                                    <input type="radio" value="1" />
                                                    <span>슈퍼무제한</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wrap-button btn-secondary btn-40">
                                        <span>
                                            예약하기
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div >
                );
            })}
        </>
    );
};

export default posts;