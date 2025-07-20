//import axios from "axios";
import { useState, useEffect, useRef } from "react";
import CartList_empty from "./CartListEmpty";

function CartItem({
    item,
    onIncrease,
    onDecrease,
    onRemove,
    userId,
    serverURL,
    isItEmpty,
}) {
    const initData = localStorage.getItem("CartItem");
    const [cartItems, setCartItems] = useState([]);
    const isMount = useRef(false);

    useEffect(() => {
        // if (!isMount.current) {
        //     isMount.currnet = true;
        //     return;
        // }
        const data = item.map((it) => {
            return {
                id: it.id,
                price: it.price,
                title: it.title,
                count: it.count,
            };
        });
        if (data.length === 0) {
            console.log("배열 안에 아이템이 하나도 없습니당 ㅠㅠ");
            isItEmpty = true;
        } else {
            /*
                  console.log('배열 안에 아이템이 하나 이상 들어있습니다.'); */
            setCartItems(data);
        }
    }, [item]);

    const handleIncrement = (e) => {
        console.log("증가");
        onIncrease(e.target.value);
    };

    const handleDecrement = (e) => {
        console.log("감소");
        onDecrease(e.target.value);
    };

    const handleRemove = (e) => {
        onRemove(e.target.value);
    };

    return (
        <>
            {cartItems.map((i, idx) => (
                <li li className="cart-item">
                    <div className="cart-item-txt">
                        <div className="cart-item-txt-wrap">
                            <span>상품번호 {i.id || i.product_id}</span>
                            <h3 className="text-style-24">{i.title}</h3>
                        </div>

                        <p className="price-32">
                            {i.price * i.count}
                            <span className="currency">원</span>
                        </p>
                        <div className="cart-item-count">
                            <button
                                className="decrease-btn"
                                value={i.id}
                                onClick={handleDecrement}
                            >
                                -
                            </button>
                            <div>{i.count}</div>
                            <button
                                className="increase-btn"
                                value={i.id}
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="cart-item-btn-sec">
                        <button
                            type="button"
                            className="btn-outlined btn-40 remove-btn"
                            value={i.id}
                            onClick={handleRemove}
                        >
                            삭제하기
                        </button>
                    </div>
                </li>
            ))}
        </>
    );
}

export default CartItem;