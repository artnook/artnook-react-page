import React from "react";
import { Menu, MenuButton } from "@chakra-ui/react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
const History = () => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <NavLnb>
      <Menu>
        <MenuButtonStyled>추천</MenuButtonStyled>
        <MenuButtonStyled>랭킹</MenuButtonStyled>
        <MenuButtonStyled>발견</MenuButtonStyled>
        <MenuButtonStyled>럭셔리</MenuButtonStyled>
        <MenuButtonStyled>남성</MenuButtonStyled>
        <MenuButtonStyled>여성</MenuButtonStyled>
      </Menu>
    </NavLnb>
  );
};

const NavLnb = styled.nav`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

const MenuButtonStyled = styled(MenuButton)`
  margin-right: 27px;
  color: #222;
`;

export default History;
