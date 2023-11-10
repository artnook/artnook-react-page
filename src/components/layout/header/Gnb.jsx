import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";

const Gnb = () => {
  const location = useLocation();

  return (
    <GnbWapper>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/style" ? "active" : ""}>
          <Link to="/style">Style</Link>
        </li>
        <li className={location.pathname === "/shop" ? "active" : ""}>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>

      {/* <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">홈</Link>
                </li>
                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/about">소개</Link>
                </li>
            </ul> */}
    </GnbWapper>
  );
};

const GnbWapper = styled.nav`
  ul {
    display: flex;
    li {
      position: relative;
      margin-left: 3px;
      &::after {
        opacity: 0;
        transition: opacity 1s;
      }
      &.active {
        a {
          color: #000;
          font-weight: 700;
          svg {
            color: var(--primary);
          }
        }
      }
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 80px;
        padding: 0 20px;
        color: #000;
        font-weight: 400;
        &:hover {
          color: #000;
        }
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;

export default Gnb;
