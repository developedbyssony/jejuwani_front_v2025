import Slider from "react-slick";
import ProductUnit from "../molecules/CardItemActivity";
import styled from "styled-components";
import NextArrow from "../atoms/NextArrow";
import PrevArrow from "../atoms/PrevArrow";

const StyledSlider = styled(Slider)`
  width: 100%;
`;

export default function SimpleSlider({
  data,
  setCart,
  closeCart,
  store,
  reverse,
  cart,
}) {

  const settings = {
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  };

  return (
    <>
      <div className="main-slider-product">
        <StyledSlider {...settings}>
          {data.map((d) => (
            <ProductUnit
              item={d}
              setCart={setCart}
              closeCart={closeCart}
              store={store}
              reverse={reverse}
              cart={cart}
            />
          ))}
        </StyledSlider>
      </div>
    </>)
}