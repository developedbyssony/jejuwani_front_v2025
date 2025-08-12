import { useNavigate } from "react-router-dom";

function QuickMenu() {
  const url="https://www.notion.so/ssony/Jejuwani-ing-243b987565a7800ab2e2ec923e5a194d?source=copy_link"
  const menuItems = [{ label: "Guide"}]; 
  return (
    <>
      <div className="quick-menu">
        {menuItems.map((item, index) => (
          <button
            className="quick-menu-btn"
            onClick={()=>{window.open(url)}}
          >
            <img src="./assets/main/link_new.png" alt="퀵메뉴 링크" />
            <div className="label">{item.label}</div>
          </button>
        ))}
      </div>
    </>
  );
}

export default QuickMenu;
