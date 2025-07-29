import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function CartCount({ item }) {
    const history = useNavigate();
    const [isItEmpty, conFirmList] = useState(false);
    useEffect(() => {
        if (item.length === 0) {
            conFirmList(!isItEmpty);
            console.log("카운트에서 빈 배열 확인");
        } else {
            conFirmList(false);
        }
    }, [item]);
    const wholeCount = item.map((i) => Number(i.price * i.count));
    /*
      const wholeCountItem = wholeCount.reduce((acc, cur) => `${acc}  ${cur} +`, '결제 예정 금액 ');
      */
    const wholeCountNum = wholeCount.reduce(
        (acc, cur) => Number(acc) + Number(cur),
        0,
    );
    return (
        <>
            <div className="likeUnitwrapper">
                <strong className="text-style-16">결제 예정 금액</strong>
                <div className="amount-bottom">
                    <div className="sumcount">
                        <div className="price-32" id="price-sum">
                            <div className="price-sumcount">
                                <p className="amount-bottom">
                                    <span className="text-style-20">Total</span>
                                    <span className="currency"> {wholeCountNum.toLocaleString() || 0}원</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="buyBtn-section">
                        <button
                            className="btn-primary btn-55 btn-buy"
                            onClick={() => {
                                history("/order",
                                    { state: { item: item, wholeCountNum: wholeCountNum } });
                            }}
                        >
                            구매하기
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartCount;