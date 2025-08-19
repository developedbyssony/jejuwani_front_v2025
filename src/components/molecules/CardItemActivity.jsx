import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import CartButton from "../atoms/CartButton";
import Rating from "./RatingStars";

function productUnit({ item, setCart, reverse, cart }) {
    const history = useNavigate();
    const view_url = `/detail/${item.id}`;
    let [product, setProduct] = useState(item.like);

    const fid = useRef();
    const ftitle = useRef();
    const fprice = useRef();
    const ftarget = useRef();

      const modalClose = () => {
    if (localStorage.getItem("cartItem") != null) {
      let getItem = JSON.parse([localStorage.getItem("cartItem")]);
      getItem.push(JSON.parse(JSON.stringify(product)));
      localStorage.setItem("cartItem", JSON.stringify(getItem));
    } else {
      localStorage.setItem("cartItem", JSON.stringify([product]));
    }
  };

    return (
        <div
            className="productUnit-frame"
            onClick={() => {
                history(view_url, {
                    state: { post: item },
                });
            }}
        >
                            <CartButton modalClose={modalClose}></CartButton>

            <div className="productUnit-img" ref={fid} id={item.id}>
                <img
                    src={item.imgSrc}
                    alt="카드 UI 이미지"
                />
            </div>
            <div className="productUnit-contents">
                <div className="productUnit-contents-tit">
                    <div className="productUnit-contents-wrap">
                        <span className="tag-cate" id="main-tag" ref={ftitle}>
                            {item.label ||
                                item.region1 ||
                                (item.category === 1 && <span>감성 제주</span>) ||
                                (item.category === 2 && <span>가족과 제주</span>) ||
                                (item.category === 3 && <span>익사이팅 제주</span>) ||
                                (item.category === 4 && <span>힐링 제주</span>) ||
                                (item.category === 5 && <span>찐맛 제주</span>) ||
                                (item.category === 6 && <span>내추럴 제주</span>)}
                        </span>

                        <p className="unit-tit text-style-19">{item.title}</p>
                    </div>
                    <div
                        className={`productUnit-contents-price ${isNaN(item.price) === true ? "none" : "visible"}`}
                    >
                        <h1 className="unit-tit price-20" ref={fprice}>
                            {(item.price * 1).toLocaleString()}원
                        </h1>
                    </div>
                    <div className="productUnit-contents-like">
                        <div
                            id={item.id}
                            className="heartNotActive"
                            ref={ftarget}
                            onClick={(event) => {
                                reverse(event);
                                like(event);
                            }}
                        ></div>
                        <h1 className="unit-tit text-style-16">{product}</h1>
                    </div>
                </div>
                <div className="productUnit-contents-address">
                    <h1 className="text-style-13">{item.region || "주소 미기재"}</h1>
                </div>

                <div
                    className={`productUnit-contents-rating ${isNaN(item.price) === true ? "none" : "visible"}`}
                >
                    <Rating rating={item.rating}></Rating>
                    {/*
                ({item.rating}점)
                </div>
                */}
                </div>
            </div>
        </div>
    );
}

export default productUnit;