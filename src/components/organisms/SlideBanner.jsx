import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const Dropdown = () => {
  const [isClosed, setClose] = useState(false);
  const [cookies, setCookies] = useCookies(["Cookie"]);
  const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    if (cookies["Cookie"]) {
      setHasCookie(true);
      setClose(true);
    } else setHasCookie(false);
  }, [cookies]);

  const getExpiredDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }
  function getClose() {
    setClose(true);
    const expires = getExpiredDate(1);
    setCookies("Cookie", true, { path: "/", expires });
  }

  if (isClosed && hasCookie) return null; // 완전히 닫히면 렌더링 안 함

  return (
    <div className={`drop_pop ${isClosed
      ? "slideUp" : "slideDown"}`}>
      <div className="drop_wrap">
        <a aria-label="PC 최상단 배너" href="#"></a>
        <div className="cls_wrap">
          <form action="" className="cls_bottom">
            <input type="checkbox"></input>
            <label htmlFor="">
              오늘 그만 보기
            </label>
            <span onClick={getClose}>X</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
