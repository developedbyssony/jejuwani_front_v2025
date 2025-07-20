import { useState, useEffect } from "react";

function CartList_empty() {
    return (
        <div className="empty-cart">
            <p>장바구니에 상품이 없습니다.</p>
        </div>
    );
}

export default CartList_empty;