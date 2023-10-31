import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Footerlg>
      <div className="Inner">
        <div className="Servicearea">
          <div className="Customerservice">
            <strong className="Servicetitle">
              고객센터
              <a href="#"></a>
            </strong>
            <div className="Servicetime">
              <dl className="Timebox">
                <dt className="Timeterm">
                  운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무) 점심시간 평일
                  13:00 - 14:00
                </dt>
              </dl>
            </div>
            <div className="Servicebtnbox">
              <a href="#" className="Btnsolidsmall">
                자주 묻는 질문
              </a>
            </div>
          </div>
          <div className="Footermenu">
            <div className="Menubox">
              <strong className="Menutitle">이용안내</strong>
              <ul className="Menulist">
                <li className="Menuitem">
                  <a href="#">검수기준</a>
                </li>
                <li className="Menuitem">
                  <a href="#">이용정책</a>
                </li>
                <li className="Menuitem">
                  <a href="#">페널티 정책</a>
                </li>
                <li className="Menuitem">
                  <a href="#">커뮤니티 가이드라인</a>
                </li>
              </ul>
            </div>
            <div className="Menubox">
              <strong className="Menutitle">고객지원</strong>
              <ul className="Menulist">
                <li className="Menuitem">
                  <a href="#">공지사항</a>
                </li>
                <li className="Menuitem">
                  <a href="#">서비스 소개</a>
                </li>
                <li className="Menuitem">
                  <a href="#">스토어 안내</a>
                </li>
                <li className="Menuitem">
                  <a href="#">판매자 방문접수</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Corporationarea">
          <ul className="Termlist">
            <li className="Termitem">
              <a href="#">회사소개</a>
            </li>
            <li className="Termitem">
              <a href="#">인재채용</a>
            </li>
            <li className="Termitem">
              <a href="#">제휴제안</a>
            </li>
            <li className="Termitem">
              <a href="#">이용약관</a>
            </li>
            <li className="Termitem">
              <a href="#">개인정보처리방침</a>
            </li>
          </ul>
          <div className="Footersns">
            <div className="Snsbox">
              <a href="#" aria-label="인스타그램" className="Sns">
                <img src="" alt="#" />
              </a>
              <a href="#" aria-label="페이스북" className="Sns">
                <img src="" alt="#" />
              </a>
              <a href="#" aria-label="카카오톡" className="Sns">
                <img src="" alt="#" />
              </a>
            </div>
            <div className="Btnbusiness">
              사업자정보
              <img src="" alt="#" />
            </div>
          </div>
          <div className="Businessinfo">
            <div className="Infolist">
              <dl className="Infoitem">
                <dt class="Businesstitle">
                  크림 주식회사 · 대표 김창욱<span class="blank"></span>
                  사업자등록번호 : 570-88-01618 <a href="#">사업자정보확인</a>
                  <span class="blank"></span>통신판매업 : 제
                  2021-성남분당C-0093호<span class="blank"></span>사업장소재지 :
                  경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 8층
                  <span class="blank"></span>호스팅 서비스 : 네이버 클라우드 ㈜
                </dt>
              </dl>
            </div>
          </div>
        </div>
        <div className="Noticearea"></div>
      </div>
    </Footerlg>
  );
};

const Footerlg = styled.footer`
  padding-left: 40px;
  padding-right: 40px;
  border-top: 1px solid #ebebeb;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-bottom: 50px;
  padding-top: 50px;
`;
export default Footer;
