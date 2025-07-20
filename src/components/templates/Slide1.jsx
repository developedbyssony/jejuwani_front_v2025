import React from "react";
import Slider from "react-slick";

export default function slider() {
  const settings = {
    centerMode: true,
    centerPadding: '60px', // 중심 강조 여백
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: false,
    speed: 200,
    responsive: [
      {
        breakpoint: 1440, // 1439px 이하에서는 그대로 3개
        settings: {
          slidesToShow: 3,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 1024, // 1023px 이하에서는 1개
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 768, // 767px 이하 모바일용
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
          arrows: false,
          dots: true, // 모바일에서 도트 전환
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="slider">
        <img
          src="assets/main/main-banner3.png"
          alt="맛집이미지"
          id="img-banner"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <img
          src="assets/main/main-banner3_m.png"
          alt="맛집이미지"
          id="img-banner-m"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
      <div className="slider">
        <img
          src="assets/main/main-banner2.png"
          alt="맛집이미지"
          id="img-banner"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <img
          src="assets/main/main-banner2_m.png"
          alt="맛집이미지"
          id="img-banner-m"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
      <div className="slider">
        <img
          src="assets/main/main-banner1.png"
          alt="맛집이미지"
          id="img-banner"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <img
          src="assets/main/main-banner1_m.png"
          alt="맛집이미지"
          id="img-banner-m"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
      <div className="slider">
        <img
          src="assets/main/main-banner4.png"
          alt="맛집이미지"
          id="img-banner"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <img
          src="assets/main/main-banner4_m.png"
          alt="맛집이미지"
          id="img-banner-m"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
      <div className="slider">
        <img
          src="assets/main/main-banner5.png"
          alt="맛집이미지"
          id="img-banner"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <img
          src="assets/main/main-banner5_m.png"
          alt="맛집이미지"
          id="img-banner-m"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
    </Slider>
  );
}