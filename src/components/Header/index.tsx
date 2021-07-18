import Wrapper from "./style";

const MENU_LIST = [
  {
    name: "E-pit",
    url: "/e-pit",
  },
  {
    name: "Network",
    url: "/network",
  },
  {
    name: "뉴스&이벤트",
    url: "/news",
  },
  {
    name: "고객지원",
    url: "/support",
  },
];

const Header: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <div className="logo">
        <img src="/images/ic-logo.svg" alt="ic-logo" />
      </div>
      {MENU_LIST.map((item) => (
        <div key={item.name} className="menu-item">
          {item.name}
        </div>
      ))}
    </Wrapper>
  );
};

export default Header;
