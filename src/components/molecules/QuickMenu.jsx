import { useNavigate } from "react-router-dom";

function QuickMenu() {
    const navigate = useNavigate();
  const menuItems = [{ label: "Guide", path: "/guide" }];
  return (
    <>
      <div className="quick-menu">
        {menuItems.map((item, index) => (
          <button
            className="quick-menu-btn"
            onClick={() => navigate(item.path)}
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
