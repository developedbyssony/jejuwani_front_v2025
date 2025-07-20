import { useState, useRef } from "react";

function productDetailNavBar({ product, review }) {
    const [Active, isActiveList] = useState();
    const handleProductTab = (e) => {
        isActiveList(e.target.value);
        console.log(Active);
        if (Active === "product-spec") {
            window.scrollBy({
                top: 800,
            });
        } else if (Active === "product-review") {
            window.scrollBy({
                top: 1500,
            });
        }
    };

    return (
        <div className="row">
            <div className="col-12">
                <div className="product-detail-navbar">
                    <div className="product-detail-navbar-cate">
                        <div
                            className="product-spec"
                            value="product-spec"
                            onClick={handleProductTab}
                        >
                            <button
                                type="button"
                                value="product-spec"
                                onClick={handleProductTab}
                                className="product-detail-navbar-cate-item"
                            >
                                상품정보
                            </button>
                        </div>
                        <div
                            className="product-review"
                            value="product-review"
                            onClick={handleProductTab}
                        >
                            <button
                                type="button"
                                value="product-review"
                                onClick={handleProductTab}
                                className="product-detail-navbar-cate-item"
                            >
                                이용약관
                            </button>
                        </div>
                    </div>
                </div>
                <div className="detail-info-contents">
                    <div className="section">
                        <div className="sec-product-info-flex">
                            <div className="sec-product-info-rule-flex">
                                <div className="sec-productinfo" aria-labelledby="product-spec">
                                    <h1 className="page-tit" id="product-info-tit">
                                        🏷️ 상품정보
                                    </h1>
                                    <div className="product-contents-txt">
                                        {product.introduction}
                                    </div>
                                </div>
                            </div>
                            <div className="sec-service-rule" aria-labelledby="rule">
                                <h1 className="page-tit" id="product-service-rule">
                                    📄 이용약관
                                </h1>
                                <div className="rule-txt-detail" id="detail-rule">
                                    <dl className="detail-rule-1">
                                        <br />
                                        <p className="review-contents" id="detail-rule-inner-txt">
                                            <dt class="text-style-18">
                                                <i className="ic-attachment"></i>예약 정책
                                            </dt>
                                            <br />
                                            <li>체험 예약 | 예약 취소 사항, 불이익 발생 사유</li>
                                            <span>
                                                1. 예약 취소 사항 : 모든 정보를 입력한 이용자의 예약은
                                                기본적으로 자동 승낙
                                            </span>
                                            <li>
                                                모든 정보를 입력한 이용자의 예약은 기본적으로 자동 승낙
                                            </li>
                                            <li>
                                                이용자의 휴대전화번호가 예약 시 사용한 번호와 일치하지
                                                않을 시 예약 불가능 또는 자동 취소
                                            </li>
                                            <br />
                                            <span>
                                                2. 불이익 발생 사유 : 이용자가 각 사항을 지키지 않을 시
                                                불이익 발생 가능
                                            </span>
                                            <li>
                                                "이용자"가 예약 요청 시 선택한 인원 수에 맞춰 예약 된
                                                매장 방문
                                            </li>
                                            <li>
                                                "이용자"가 예약 요청 시 날짜에 맞춰 예약된 매장 방문
                                            </li>
                                            <li>
                                                "이용자"가 예약 요청 시 선택한 시간에 맞춰 예약된 매장
                                                방문
                                            </li>
                                            <br />
                                        </p>
                                    </dl>
                                    <dl className="detail-rule-2">
                                        <br />
                                        <p className="review-contents">
                                            <dt class="text-style-18">
                                                <i className="ic-attachment"></i>예약 보증금 정책
                                            </dt>
                                            <br />
                                            <li>예약 보증금 | 보증금 정책, 보증금 약관</li>
                                            <span>
                                                1. 보증금 정책 : 일부 예약에 한해 "예약 보증금"제도를
                                                운영할 수 있음
                                            </span>
                                            <li>
                                                "회원"이 예약을 요청할 때 정해진 금액의 예약 보증금을
                                                결제 또는 지급할 것을 요구할 수 있음
                                            </li>
                                            <br />
                                            <span>2. 보증금 약관</span>
                                            <li>
                                                "회사"는 일부 예약에 한하여 "예약 보증금"제도를 운영할
                                                수 있으며, 약관에 따름
                                            </li>
                                            <br />
                                        </p>
                                    </dl>
                                    <dl className="detail-rule-3">
                                        <br />
                                        <p className="review-contents">
                                            <dt class="text-style-18">
                                                <i className="ic-attachment"></i>리뷰 작성 정책
                                            </dt>
                                            <br />
                                            <li>실방문 확인 | 실방문자 리뷰 등록</li>
                                            <li>사진권한 | 사진 열람 및 사용 권한</li> <br />
                                            <span>
                                                1.실방문자 리뷰 등록 : 제주완니 서비스를 통핸 매장 이용
                                                고객만 리뷰 작성 가능
                                            </span>{" "}
                                            <br />
                                            <span>
                                                2.사진 열람 및 사용 권한 : 사용자의 동의가 있어야 할
                                                경우에만 사진의 열람 및 사용이 가능
                                            </span>
                                        </p>
                                    </dl>
                                </div>
                            </div>
                            <div
                                className="sec-productreview"
                                aria-labelledby="product-review"
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default productDetailNavBar;