import { useLocation } from "react-router";
import { useState, useRef, useEffect } from "react";
import Input from "../components/atoms/Input2";
import Button from "../components/atoms/Button";

function orderSheet() {
    const userInfo = [];
    const [inputText, setInputText] = useState("");
    const [info, setInfo] = useState([]);
    const [orderList, setOrderList] = useState([]);

    const remail = useRef();
    const rname = useRef();
    const rtel = useRef();
    const raddr = useRef();
    const rpostcode = useRef();

    const parentFunction = (e) => {
        setInputText(e.target.value);
        userInfo.push(e.target.value);
        console.log("실행");
    };

    const location = useLocation();
    const item = location.state.item;
    const itemCount = item.count;
    const itemPrice = item.price;
    const wholeCountN = item.reduce((acc, cur) => {
        return acc + cur.price;
    }, 0);
    const wholeCountNum = location.state.wholeCountNum || wholeCountN;
    useEffect(() => {

        const newList = item.map((it) => [
            {
                title: it.title,
                count: it.count,
                price: it.price,
            },
        ]);
        console.log(item);


            const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };

    
    });

    function payment(e) {
        e.preventDefault();
        const { IMP } = window;
        IMP.init("imp32354214");
        IMP.request_pay(
            {
                pg: "html5_inicis",
                pay_method: "card",
                merchant_uid: `mid_${new Date().getTime()}`,
                name: item[0].title,
                amount: wholeCountNum,
                buyer_email: "dd",
                buyer_name: "홍길동",
                buyer_tel: "010-4242-4242",
                buyer_addr: "서울특별시 강남구 신사동",
                buyer_postcode: "01181",
            },
            (rsp) => {
                if (rsp.success) {
                    fetch("https://your-server.com/payments/complete", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            imp_uid: rsp.imp_uid,
                            merchant_uid: rsp.merchant_uid
                        })
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log("결제 완료 처리 응답:", data);
                        })
                        .catch((err) => {
                            console.error("서버 통신 오류:", err);
                        });
                }
    })}
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="section">
                        <div className="container">
                            <div className="cart-top-sec">
                                <h1 className="page-tit">주문/결제 </h1>
                                <div className="order-wrap">
                                    <div className="order-sec-left">
                                        <h1 className="order-tit text-style-16">주문상품</h1>
                                        <ul className="order-div">
                                            {item.map((a, idx) => (
                                                <li className="table-row">
                                                    <div className="order-top-txt">
                                                        <a class="text-style-13">관광지</a>
                                                        <div className="heading">
                                                            <div class="cell">
                                                                <span>상품번호</span>
                                                                <span>{a.product_id || a.id}</span>
                                                            </div>
                                                        </div>
                                                        <div className="heading">
                                                            <div class="cell">
                                                                <span>수량</span>
                                                                <span>{a.count}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="heading">
                                                        <div class="cell">
                                                            <p className="text-style-24">{a.title}</p>
                                                        </div>
                                                    </div>
                                                    <div className="heading">
                                                        <div class="cell price-32">
                                                            <p>{a.price.toLocaleString("ko-KR")}</p>
                                                            <span className="currency">원</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="order-sec-right">
                                        <h1 className="order-tit text-style-16">주문자 정보</h1>
                                        <form className="order-form-div" action="/" method="POST">
                                            <div className="write-inputs">
                                                <div className="first-inputs">
                                                    <div className="email">
                                                        <strong>이메일</strong>{" "}
                                                        <Input
                                                            type={"text"}
                                                            placeholder={"n_uck@naver.com"}
                                                            name={"buyer_email"}
                                                            parentFunction={parentFunction}
                                                            ref={remail}
                                                        />
                                                    </div>
                                                    <div className="name">
                                                        <strong>이름</strong>{" "}
                                                        <Input
                                                            type={"text"}
                                                            placeholder={"소윤희"}
                                                            name={"buyer_name"}
                                                            parentFunction={parentFunction}
                                                            ref={rname}
                                                        />
                                                    </div>
                                                    <div className="name">
                                                        <strong>전화번호</strong>{" "}
                                                        <Input
                                                            type={"text"}
                                                            name={"buyer_phone"}
                                                            placeholder={"01045032245"}
                                                            parentFunction={parentFunction}
                                                            ref={rtel}
                                                        />
                                                    </div>
                                                    <div className="addr">
                                                        <strong>주소</strong>{" "}
                                                        <Input
                                                            type={"text"}
                                                            name={"buyer_addr"}
                                                            placeholder={"서울시 영등포구"}
                                                            parentFunction={parentFunction}
                                                            ref={raddr}
                                                        />
                                                    </div>
                                                    <div className="postcode">
                                                        <strong>우편번호</strong>{" "}
                                                        <Input
                                                            type={"text"}
                                                            name={"postcode"}
                                                            placeholder={"01400"}
                                                            parentFunction={parentFunction}
                                                            ref={rpostcode}
                                                        />
                                                    </div>

                                                    <div className="order-form-message">
                                                        <p>
                                                            <img
                                                                src="../assets/sub/order_ic.png"
                                                                alt="정보 제공 동의 섹션 이미지"
                                                            />
                                                            <div className="check-wrap">
                                                                <input
                                                                    type="checkbox"
                                                                    name="agree"
                                                                    id="agree"
                                                                />
                                                                <label htmlFor="agree">
                                                                    <span className="text-style-16">
                                                                        주문 내용을 확인하였으며, 정보 제공 등에
                                                                        동의합니다.
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </p>
                                                        <Button
                                                            styleClass={"btn-55 btn-primary"}
                                                            label={"결제하기"}
                                                            onClick={payment}
                                                        ></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default orderSheet;
