import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProductNavBar from "../organisms/NavBar-product";
import Rating from "../atoms/Star";
import DatePickerComponent from "../atoms/DatePicker";

function productShow({ serverURL, product_info, review, item, cart }) {
  const history = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const totalPrice = product_info.post.price * quantity;

  const toggleArrow = useRef();
  const selectBox = useRef();
  useEffect(() => {
    setProduct((prev) => ({
      ...prev,
      count: quantity,
    }));
    const trigger = document.getElementById("dropdownTrigger");
    const list = document.getElementById("dropdownList");
    const display = document.getElementById("selectedValue");
    const items = list.querySelectorAll(".panel.combo-item");
    const hiddenInput = document.getElementById("selectedHiddenInput");

    trigger.addEventListener("click", () => {
      list.classList.toggle("on");
    });

    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        const value = e.target.value;
        // ✅ 화면에 표시
        display.textContent = value;
        // ✅ 값 저장
        hiddenInput.value = value;
        // ✅ 드롭다운 닫기
        list.classList.remove("on");
      });
    });
  }, [quantity]);

  let [cartState, setCart] = useState([]);
  let [heart, setheart] = useState(false);
  let [modalOpen, setModalOpen] = useState(false);
  let [modalOpenD, setModalOpenD] = useState(false);
  let [product, setProduct] = useState({
    product_id: product_info.post.id, // 고유번호
    category: "1", // 액티비티인지, 레스토랑인지 분류
    title: product_info.post.title, // 프로덕트(게시글) 이름
    region: "2", // 주소가 속한 지역,
    rating: product_info.post.rating, // 별점 평균
    review: product_info.post.review.length || 0, // 총 리뷰의 갯수
    setHeart: heart, // 유저가 like를 눌렀는가? (bool) -> like 눌렀을 시 유저 아이디에 제품 정보 save
    address: product_info.post.region,
    hit: product_info.post.hit,
    likes: product_info.post.like, // 제품이 총 like를 받은 수 (숫자)
    price: product_info.post.price,
    imgSrc: product_info.post.imgSrc,
    count: quantity,
    content: product_info.post.introduction,
    tag: product_info.post.tag,
    label: product_info.post.region1,
    introduction: product_info.post.introduction,
  });

  let [price, setPrice] = useState(product.price);

  const handleQuantityChange = (val) => {
    setQuantity(val);
  };

  const modalClose = () => {
    if (localStorage.getItem("cartItem") != null) {
      let getItem = JSON.parse([localStorage.getItem("cartItem")]);
      getItem.push(JSON.parse(JSON.stringify(product)));
      localStorage.setItem("cartItem", JSON.stringify(getItem));
    } else {
      localStorage.setItem("cartItem", JSON.stringify([product]));
    }
  };

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

  return (
    <div>
      <div className="conatiner-fluid">
        <div className="productShow">
          <div className="product-overview">
            <div className="section" id="product-show-sec">
              <div className="product-img-detail-activity">
                <img
                  src={product.imgSrc}
                  alt="액티비티이미지"
                  id="img-activity"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="product-order">
                <div class="product-info">
                  <div className="product-info-header">
                    {product.category === "1" && (
                      <a className="text-style-16">Activity</a>
                    )}
                    <h1 className="info-tit text-style-24" id="info-tit">
                      {product.title}
                    </h1>
                  </div>

                  <div className="product-info-top">
                    <div className="price-40">
                      <strong className="amount">
                        {product_info.post.price.toLocaleString()}
                      </strong>
                      <span className="currency">원</span>
                    </div>
                  </div>

                  <div className="product-info-bottom">
                    <div className="product-info-like">
                      <div className="product-like">
                        <h1
                          className={heart ? "heartNotActive" : "heartActive"}
                          id="heart-b"
                        ></h1>
                        <span>{product.likes}</span>
                      </div>
                      <div className="product-info-address">
                        <div className="address">
                          <p className="text-sytle-13">
                            <span className="w-chip">
                              {product.label || product.region1}
                            </span>
                            {product.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {product.tag.split(",").map((el) => (
                    <>
                      <strong
                        className="tag-sale text-style-13"
                        style={{ marginRight: "7px", marginBottom: "23px" }}
                      >
                        {el.trim()}
                      </strong>
                    </>
                  ))}
                </div>
                <form className="order-formz" action="/" method="POST" style={{ marginTop:"20px"}}>
                  <div className="order-inputz">
                    <div
                      className="form-select"
                      id="dropdownTrigger"
                      onClick={dropDownClick}
                    >
                      <span id="selectedValue">
                        {quantity ? `${quantity}개` : "수량 선택"}
                      </span>
                      <span className="textbox-addon-right" ref={toggleArrow}>
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
                  </div>
                  <div className="datepickers" id="product-show">
                    <div className="date-picker-start">
                      <DatePickerComponent
                        parentFunction1={parentFunction1}
                        parentFunction2={parentFunction2}
                      />
                    </div>
                    <div className="date-picker-end">
                      <DatePickerComponent
                        parentFunction1={parentFunction1}
                        parentFunction2={parentFunction2}
                      />
                    </div>
                  </div>
                  <dl className="order-summary">
                    <dt>주문금액</dt>
                    <dd>
                      <output for="mandatory-select">
                        <div className="price-20">
                          <strong className="amount">
                            {totalPrice.toLocaleString()}
                          </strong>
                          <span className="currency-product-show">원</span>
                        </div>
                      </output>
                    </dd>
                  </dl>
                  <div className="button-group">
                    <Link to="/cart">
                      <button
                        className="btn-outlined btn-55"
                        type="button"
                        onClick={modalClose}
                        id="firstBtn btn-buy"
                      >
                        장바구니
                      </button>
                    </Link>
                    <div className="margin-right">
                      <button
                        className="btn-primary btn-55"
                        id="btn-buy"
                        type="button"
                        onClick={() => {
                          history("/order", { state: { item: [product] } });
                        }}
                      >
                        바로구매
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ProductNavBar product={product} />
      </div>
    </div>
  );
}

export default productShow;
