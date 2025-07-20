import { useState, useEffect, useRef } from "react";

function productUnit({ item, setCart, reverse, store, cart }) {
    const view_url = item.link;

    const fid = useRef();
    const ftitle = useRef();
    const fprice = useRef();
    const ftarget = useRef();

    return (
        <div
            className="productUnit-frame-wanner-blog"
            onClick={() => {
                window.open(view_url);
            }}
        >
            <div className="productUnit-img-blog" ref={fid} id={item.id}>
                <img
                    src={item.imgSrc}
                    alt="카드 UI 이미지"
                    style={{ height: "100%", width: "100%", objectFit: "cover" }}
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
                </div>
            </div>
        </div>
    );
}

export default productUnit;