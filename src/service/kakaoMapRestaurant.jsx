import React, { useEffect } from "react";
const { kakao } = window;

function KakaoMapRestaurant({ latitude, longitude, title }) {
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1d7312702e5d32281d296be7d79ce5dd&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const markerz = {
          position: new window.kakao.maps.LatLng(latitude, longitude),
          text: title,
        };
        const container = document.getElementById("staticMap");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
          marker: markerz,
        };
        const staticMap = new window.kakao.maps.StaticMap(container, options);
      })
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  })
  return (
    <>
      <div className="section" style={{ overflow: "hidden" }}>
        <div id="staticMap" style={{ width: "100%", height: "30vh" }}></div>
      </div>
    </>
  );
}

export default KakaoMapRestaurant;