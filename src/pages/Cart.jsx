import { useState, useEffect, useRef } from "react";
import CartItem from "../components/organisms/Cart/CartItem";
import CartList_empty from "../components/organisms/Cart/CartListEmpty";
import CartCount from "../components/organisms/Cart/CartCount";

function my({ serverURL, userId }) {
    const [isItEmpty, conFirmList] = useState(false);
    let [isitcartData, setCartData] = useState(true);
    let [cartData, setCartItems] = useState([]);

    useEffect(() => {
        let initialCartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
        if (initialCartItem.length == 0) {
            conFirmList(!isItEmpty);
        } else if (initialCartItem.length >= 1) {
            console.log("배열 안에 아이템이 하나 이상 들어있습니다.");
            const newCartItem = initialCartItem.map((it, idx) => {
                return {
                    id: it.product_id || it.id,
                    price: it.price,
                    title: it.title,
                    count: it.count
                };
            });
            setCartItems(newCartItem);
        }
    }, []);

    const likeCate1 = "액티비티";
    const eventKey1 = "activity";
    const likeCate2 = "레스토랑";
    const eventKey2 = "restaurant";

    const onIncrease = (i) => {
        console.log(cartData);
        const data = cartData.map((it) => {
            if (it.id == i) {
                const count = it.count + 1;
                it = { ...it, count: count };
            }
            return it;
        });
        setCartItems(data);
        console.log(data);
        console.log(cartData);
    };

    const onDecrease = (i) => {
        const data = cartData.map((it) => {
            if (it.id == i) {
                const count = it.count - 1;
                it = { ...it, count: count <= 0 ? 1 : count };
            }
            return it;
        });
        setCartItems(data);
    };

    const onRemove = (targetId) => {
        if (window.confirm("해당 상품을 정말 삭제하시겠습니까 ?")) {
            const newArr = cartData.filter((it) => it.id != targetId);
            localStorage.setItem("cartItem", JSON.stringify(newArr));
            setCartItems(newArr);
            console.log(newArr);
            if (newArr.length == 0) {
                conFirmList(!isItEmpty);
            }
        }
    };

    const onRemoveLike = () => {
        console.log("삭제");
    };


    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="cart-top-sec">
                        <h1 className="page-tit">장바구니 🛒</h1>
                        {isItEmpty ? (
                            <CartList_empty />
                        ) : (
                            <CartItem
                                item={cartData}
                                onRemove={onRemove}
                                onIncrease={onIncrease}
                                onDecrease={onDecrease}
                                userId={userId}
                                serverURL={serverURL}
                                isItEmpty={isItEmpty}
                            />
                        )}
                        <br />
                        <CartCount item={cartData}></CartCount>
                    </div>
                </div>
            </div>
        </>
    );
}

export default my;