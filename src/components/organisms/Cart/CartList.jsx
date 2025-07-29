import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartCount from "./CartCount";
import CartList_empty from "./CartListEmpty";

function CartList({
    isItEmpty,
    cartItem,
    onIncrease,
    onDecrease,
    onRemove,
    userId,
    serverURL,
}) {
    useEffect(() => {
        if (cartItem === null) {
            console.log("로컬스토리지가 비어있습니다.");
        } else {
            const initCartItem = cartItem.map((it) => {
                return {
                    id: it.id,
                    price: it.price,
                    title: it.title,
                    count: it.count
                };
            });
        }
        console.log(cartItem);
    });

    return (
        <CartItem
            item={cartItem}
            onRemove={onRemove}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            userId={userId}
            serverURL={serverURL}
            isItEmpty={isItEmpty}
        />
    );
}

export default CartList;