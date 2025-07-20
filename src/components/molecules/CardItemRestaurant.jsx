import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "./RatingStars";

function productUnit({ item, setCart, reverse, store, cart }) {
    const history = useNavigate();
    let [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (isNaN(item.price) === true) {
            setToggle(true);
            url = "/detail2/";
            view_url = "/detail2/" + `${item.id}`;
        } else {
            setToggle(false);
        }
    });

    let url = "/detail/";
    let view_url = url + `${item.id}`;

    const [likeItems, setLikeItems] = useState([]);
    let [product, setProduct] = useState(item.like);

    const fid = useRef();
    const ftitle = useRef();
    const fprice = useRef();
    const ftarget = useRef();

    function like() {
        console.log("클릭");
        let classList = event.target.classList.length;
        if (classList === 1) {
            setProduct(product - 1);
        } else {
            setProduct(product + 1);
        }
        const productId = fid.current.id;
        const productTitle = ftitle.current.innerHTML;
        const productPrice = fprice.current.innerHTML;
        const count = 1;
        dispatch(pickItem({ productId, productTitle, productPrice, count }));
        const newLike = {
            id: productId,
            title: productTitle,
            price: productPrice,
            count: count,
        };
        setLikeItems([newLike, ...likeItems]);
        console.log(likeItems);
        localStorage.setItem("likeState", JSON.stringify(likeItems));
        console.log(localStorage.getItem("likeState"));
    }

    return (
        <div
            className="productUnit-frame"
            onClick={() => {
                history(view_url, {
                    state: { post: item },
                });
            }}
        >
            <div className="productUnit-img" ref={fid} id={item.id}>
                <img
                    src={item.imgSrc}
                    alt="카드 UI 이미지"
                />
            </div>
            {isNaN(item.price) === true ? null : (
                <CartCTA store={store} item={item} setCart={setCart} cart={cart} />
            )}
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
                    <h1 className="text-style-13">{item.region}</h1>
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