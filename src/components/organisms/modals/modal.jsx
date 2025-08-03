import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import DatePickerComponent from "../../atoms/DatePicker";

const modal = ({ modalClose, id, title, region, price }) => {
  const [quantity, setQuantity] = useState(1);
  const [toggle, setToggle] = useState(false);

  const toggleArrow = useRef();
  const selectBox = useRef();

  const history = useNavigate();
  const titler = useRef();
  const pricer = useRef();
  const amount = useRef();
  const [item, setItem] = useState([]);
  const [userStartDate, setStartDate] = useState();
  const [userEndDate, setEndDate] = useState();

  const dropDownClick = function () {
    setToggle(!toggle);
    if (toggle == true) {
      toggleArrow.current.classList.add("rotate");
      selectBox.current.classList.add("on");
    } else {
      toggleArrow.current.classList.remove("rotate");
      selectBox.current.classList.remove("on");
    }
  };

  const handleQuantityChange = (val) => {
    setQuantity(val);
  };

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

    if (quantity < 1) {
      alert("수량을 선택해주세요.");
    } else {
      const newData = [
        {
          id: 1,
          title: title,
          count: quantity,
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
                    <img
                      src="../assets/sub/ticket_title.png"
                      alt="reservation"
                      style={{ width: "155px" }}
                    />
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
                      <div className="order-wrap" style={{flexDirection:"row"}}>
                    <span className="num">수량</span>
                      <div className="order-list">
                        <div className="order-inputs">
                          <div
                            className="form-select"
                            id="dropdownTrigger"
                            onClick={dropDownClick}
                          >
                            <span id="selectedValue">
                              {quantity ? `${quantity}개` : "수량 선택"}
                            </span>
                            <span
                              className="textbox-addon-right"
                              ref={toggleArrow}
                            >
                              <a
                                href="javascript:void();"
                                className="textbox-icon arrow"
                              ></a>
                            </span>
                          </div>
                          <input
                            type="hidden"
                            name="quantity"
                            id="selectedHiddenInput"
                          ></input>

                          <ul
                            className="panel combo"
                            ref={selectBox}
                            id="dropdownList"
                          >
                            {[1, 2, 3, 4, 5].map((val) => (
                              <li
                                className="panel combo-item"
                                key={val}
                                onClick={() => handleQuantityChange(val)}
                              >
                                {val}
                              </li>
                            ))}
                          </ul>

                          {/*
                            
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

                             */}

                          <div
                            className="select-group is-active"
                            id="order-inputz"
                            style={{margin:"10px"}}
                          ></div>
                        </div>
                      </div>
                    </div>
                      <div className="order-list">
                        <span>가격</span>
                        <span ref={pricer}>{price}</span>
                      </div>
                    </div>
                    <div className="reservation-submit">
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
