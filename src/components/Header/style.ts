import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1180px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding-left: 307px;
  position: relative;
  .logo {
    position: absolute;
    left: 0;
    top: 22px;
    width: 78px;
    cursor: pointer;
    img {
      display: block;
      width: 100%;
    }
  }
  .menu-item {
    cursor: pointer;
    font-family: "NotoSans";
    font-size: 18px;
    line-height: 27px;
    color: #333333;
    padding: 22px 0 21px;
  }
`;

export default Wrapper;
