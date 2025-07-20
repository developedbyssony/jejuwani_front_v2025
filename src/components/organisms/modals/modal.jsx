import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import DatePickerComponent from "../../atoms/DatePicker";

const modal = ({ modalClose, id, title, region, price }) => {
    const history = useNavigate();
    const titler = useRef();
    const pricer = useRef();
    const amount = useRef();
    const [item, setItem] = useState([]);
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

    function modalClick(e) {
        e.preventDefault();

        if (amount.current.value < 1) {
            alert("수량을 선택해주세요.");
        } else {
            const newData = [
                {
                    id: 1,
                    title: title,
                    count: amount.current.value,
                    price: price,
                },
            ];
            console.log(newData);
            history("/order", { state: { item: newData } });
        }
    }

    return (
        <>
            <div className="moal-wrapper">
                <div className="modal-bgc">
                    <div className="modal-ticket">
                        <div className="modal-ticket-box">
                            <div className="modal-btn-close" onClick={modalClose}>
                                <h1>x</h1>
                            </div>
                            <div className="modal-ticket-con">
                                <div className="modal-header">
                                    <h1>
                                        <span className="blind">Reservation</span>
                                    </h1>
                                    <ul>
                                        <li>
                                            <span>액티비티명</span> <span ref={titler}>{title}</span>
                                        </li>
                                        <li>
                                            <span>지역</span> <span>{region}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="modal-con-wrap">
                                    <div className="modal-bottom">
                                        <div className="datepickers">
                                            <div className="date-picker-start">
                                                <span>시작일</span>
                                                <DatePickerComponent
                                                    parentFunction1={parentFunction1}
                                                    parentFunction2={parentFunction2}
                                                />
                                            </div>
                                            <div className="date-picker-end">
                                                <span>종료일</span>
                                                <DatePickerComponent
                                                    parentFunction1={parentFunction1}
                                                    parentFunction2={parentFunction2}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <form>
                                        <div
                                            className="order-form"
                                            id="modal-order-form-reservation"
                                        >
                                            <div className="order-list">
                                                <span>수량</span>
                                                <div className="order-inputs">
                                                    <div
                                                        className="select-group is-active"
                                                        id="order-inputz"
                                                    >
                                                        <select
                                                            ref={amount}
                                                            className="form-modal-select"
                                                            id="mandatory-select"
                                                            required
                                                        >
                                                            <option value="0">선택수량</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-list">
                                                <span>가격</span>
                                                <span ref={pricer}>{price}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={modalClick}>예약하기</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default modal;