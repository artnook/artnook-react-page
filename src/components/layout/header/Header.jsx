import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";
import { Heading } from "@chakra-ui/react";
// import gsap from "gsap";

const Header = () => {
  // 스크롤 이벤트 핸들러
  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  //   const headerWrap = document.querySelector(".header-wrap");

  //   if (scrollY >= 100) {
  //     gsap.to(headerWrap, { backgroundColor: "#fff", duration: 0.5 });
  //   } else {
  //     gsap.to(headerWrap, { backgroundColor: "transparent", duration: 0.5 });
  //   }
  // };

  // // 이벤트 리스너 등록
  // window.addEventListener("scroll", handleScroll);

  return (
    <HeaderWrap className="header-wrap">
      <Heading as={"h1"}>
        <Link to="/">KREAM</Link>
      </Heading>
      <Gnb />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  z-index: 10000;
  background-color: #fff;

  h1 {
    a {
      font-size: 30px;
      font-weight: bold;
      color: #000;
    }
  }
`;

export default Header;
