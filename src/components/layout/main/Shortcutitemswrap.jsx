import React from "react";
import styled from "styled-components";

import col1 from "../../../assets/images/col-1.png";

const Shortcutitemswrap = () => {
  return (
    <Shortitemwrap>
      <Shortcutitem>
        <Shortcutitemimgwrap>
          <Itemimgbg>
            <img src={col1} alt="col1" />
          </Itemimgbg>
        </Shortcutitemimgwrap>
        <Shortcutitemtitle>크림 드로우</Shortcutitemtitle>
      </Shortcutitem>
      <Shortcutitem>
        <Shortcutitemimgwrap>
          <Itemimgbg>
            <img src={col1} alt="col1" />
          </Itemimgbg>
        </Shortcutitemimgwrap>
        <Shortcutitemtitle>실시간 차트</Shortcutitemtitle>
      </Shortcutitem>
      <Shortcutitem>
        <Shortcutitemimgwrap>
          <Itemimgbg>
            <img src={col1} alt="col1" />
          </Itemimgbg>
        </Shortcutitemimgwrap>
        <Shortcutitemtitle>남성 추천</Shortcutitemtitle>
      </Shortcutitem>
      <Shortcutitem>
        <Shortcutitemimgwrap>
          <Itemimgbg>
            <img src={col1} alt="col1" />
          </Itemimgbg>
        </Shortcutitemimgwrap>
        <Shortcutitemtitle>여성 추천</Shortcutitemtitle>
      </Shortcutitem>
      <Shortcutitem>
        <Shortcutitemimgwrap>
          <Itemimgbg>
            <img src={col1} alt="col1" />
          </Itemimgbg>
        </Shortcutitemimgwrap>
        <Shortcutitemtitle>단 3일간 특가</Shortcutitemtitle>
      </Shortcutitem>
      <Shortcutitem>
        <Shortcutitemimgwrap>
          <Itemimgbg>
            <img src={col1} alt="col1" />
          </Itemimgbg>
        </Shortcutitemimgwrap>
        <Shortcutitemtitle>정가 아래</Shortcutitemtitle>
      </Shortcutitem>
      <Shortcutitem>
        <Shortcutitemimgwrap>
          <Itemimgbg>
            <img src={col1} alt="col1" />
          </Itemimgbg>
        </Shortcutitemimgwrap>
        <Shortcutitemtitle>아우터 더블 적립</Shortcutitemtitle>
      </Shortcutitem>
      <Shortcutitem>
        <Shortcutitemimgwrap>
          <Itemimgbg>
            <img src={col1} alt="col1" />
          </Itemimgbg>
        </Shortcutitemimgwrap>
        <Shortcutitemtitle>정가 이하 겨울 패딩</Shortcutitemtitle>
      </Shortcutitem>
      <Shortcutitem>
        <Shortcutitemimgwrap>
          <Itemimgbg>
            <img src={col1} alt="col1" />
          </Itemimgbg>
        </Shortcutitemimgwrap>
        <Shortcutitemtitle>10월 혜택모음</Shortcutitemtitle>
      </Shortcutitem>
      <Shortcutitem>
        <Shortcutitemimgwrap>
          <Itemimgbg>
            <img src={col1} alt="col1" />
          </Itemimgbg>
        </Shortcutitemimgwrap>
        <Shortcutitemtitle>최대 6천 포인트!</Shortcutitemtitle>
      </Shortcutitem>
    </Shortitemwrap>
  );
};

const Shortitemwrap = styled.div`
  max-width: 1280px;
  column-gap: 8px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
`;

const Shortcutitem = styled.div`
  cursor: pointer;
  display: inline-block;
  text-align: center;
`;

const Shortcutitemimgwrap = styled.div`
  border-radius: 10px;
  height: 100px;
`;

const Itemimgbg = styled.picture`
  img {
    border-radius: 10px;
    width: 100%;
    height: 110%;
  }
`;

const Shortcutitemtitle = styled.p`
  color: #333;
  font-size: 15px;
  letter-spacing: -0.15px;
  margin-top: 15px;
`;

export default Shortcutitemswrap;
