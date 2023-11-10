import { Image, Link } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import sns1 from "../../../assets/images/footer/Facebook_black.svg";
import sns2 from "../../../assets/images/footer/Instagram_black.svg";
import sns3 from "../../../assets/images/footer/YouTube_black.svg";

const Footer = () => {
  return (
    <Footerlg>
      <Inner>
        <Servicearea>
          <Customerservice>
            <Servicetitle>
              고객센터
              <Link href="#"></Link>
            </Servicetitle>
            <Servicetime>
              <Timebox>
                <Timeterm>
                  운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무) 점심시간 평일
                  13:00 - 14:00
                </Timeterm>
              </Timebox>
            </Servicetime>
            <Servicebtnbox>
              <Link href="#" className="Btnsolidsmall">
                자주 묻는 질문
              </Link>
            </Servicebtnbox>
          </Customerservice>
          <Footermenu>
            <Menubox>
              <Menutitle>이용안내</Menutitle>
              <Menulist>
                <Menuitem>
                  <Link href="#" className="Menulink">
                    검수기준
                  </Link>
                </Menuitem>
                <Menuitem>
                  <Link href="#" className="Menulink">
                    이용정책
                  </Link>
                </Menuitem>
                <Menuitem>
                  <Link href="#" className="Menulink">
                    페널티 정책
                  </Link>
                </Menuitem>
                <Menuitem>
                  <Link href="#" className="Menulink">
                    커뮤니티 가이드라인
                  </Link>
                </Menuitem>
              </Menulist>
            </Menubox>
            <Menubox>
              <Menutitle>고객지원</Menutitle>
              <Menulist>
                <Menuitem>
                  <Link href="#" className="Menulink">
                    공지사항
                  </Link>
                </Menuitem>
                <Menuitem>
                  <Link href="#" className="Menulink">
                    서비스 소개
                  </Link>
                </Menuitem>
                <Menuitem>
                  <Link href="#" className="Menulink">
                    스토어 안내
                  </Link>
                </Menuitem>
                <Menuitem>
                  <Link href="#" className="Menulink">
                    판매자 방문접수
                  </Link>
                </Menuitem>
              </Menulist>
            </Menubox>
          </Footermenu>
        </Servicearea>
        <Corporationarea>
          <Termlist>
            <Termitem>
              <Link href="#" className="Term_link">
                회사소개
              </Link>
            </Termitem>
            <Termitem>
              <Link href="#" className="Term_link">
                인재채용
              </Link>
            </Termitem>
            <Termitem>
              <Link href="#" className="Term_link">
                제휴제안
              </Link>
            </Termitem>
            <Termitem>
              <Link href="#" className="Term_link">
                이용약관
              </Link>
            </Termitem>
            <Termitem>
              <Link href="#" className="Term_link">
                개인정보처리방침
              </Link>
            </Termitem>
          </Termlist>
          <Footersns>
            <Snsbox>
              <Link href="#" aria-label="인스타그램" className="Sns">
                <Image src={sns1} alt="#" className="Ico" />
              </Link>
              <Link href="#" aria-label="페이스북" className="Sns">
                <Image src={sns2} alt="#" className="Ico" />
              </Link>
              <Link href="#" aria-label="카카오톡" className="Sns">
                <Image src={sns3} alt="#" className="Ico" />
              </Link>
            </Snsbox>
          </Footersns>
          <div className="Businessinfo">
            <div className="Infolist">
              <Infoitem className="Infoitem">
                <Businesstitle>
                  크림 주식회사 · 대표 김창욱<span class="blank"></span>
                  사업자등록번호 : 570-88-01618 <a href="#">사업자정보확인</a>
                  <span class="blank"></span>통신판매업 : 제
                  2021-성남분당C-0093호<span class="blank"></span>사업장소재지 :
                  경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 8층
                  <span class="blank"></span>호스팅 서비스 : 네이버 클라우드 ㈜
                </Businesstitle>
              </Infoitem>
            </div>
          </div>
        </Corporationarea>
        <div className="Noticearea"></div>
      </Inner>
    </Footerlg>
  );
};

const Footerlg = styled.footer`
  border-top: 1px solid #ebebeb;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-bottom: 50px;
  padding-top: 50px;
`;

const Inner = styled.div`
  position: relative;
`;

const Servicearea = styled.div`
  border-bottom: 1px solid #ebebeb;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding-bottom: 56px;
`;

const Servicetitle = styled.strong`
  align-items: center;
  display: inline-flex;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.16px;
`;

const Customerservice = styled.div`
  display: inline-flex;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.16px;
  flex-direction: column;
  Link {
    letter-spacing: normal;
    margin-left: 4px;
  }
`;

const Servicetime = styled.div`
  padding-top: 8px;
`;

const Timebox = styled.dl`
  line-height: 17px;
`;

const Timeterm = styled.dt`
  color: rgba(34, 34, 34, 0.5);
  float: left;
  font-size: 13px;
  letter-spacing: -0.07px;
  line-height: 20px;
  max-width: 263px;
  margin-right: 4px;
`;

const Servicebtnbox = styled.div`
  padding-top: 17px;
  .Btnsolidsmall {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    border-radius: 10px;
    font-size: 12px;
    height: 34px;
    letter-spacing: -0.06px;
    padding: 0 14px;
    background-color: #222;
    font-weight: 700;
    border-radius: 0;
    color: #fafafa;
  }
`;

const Footermenu = styled.div`
  display: flex;
`;

const Menubox = styled.div`
  width: 160px;
`;

const Menutitle = styled.strong`
  font-size: 16px;
  letter-spacing: -0.16px;
`;

const Menulist = styled.ul`
  padding-top: 16px;
`;

const Menuitem = styled.li`
  list-style: none;
  .Menulink {
    color: rgba(34, 34, 34, 0.5);
    display: inline-block;
    font-size: 14px;
    letter-spacing: -0.21px;
  }
`;

const Corporationarea = styled.div`
  margin-top: 30px;
  position: relative;
`;

const Termlist = styled.ul`
  display: inline-flex;
  padding-bottom: 16px;
`;

const Termitem = styled.li`
  margin-right: 20px;
  .Term_link {
    color: #000;
    display: block;
    font-size: 14px;
    letter-spacing: -0.21px;
    &:nth-child(5) {
      font-weight: 700;
    }
  }
`;

const Footersns = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const Snsbox = styled.div`
  .Sns {
    display: inline-block;
    .Ico {
      height: 24px;
      width: 24px;
      margin-left: 15px;
    }
  }
`;

const Infoitem = styled.dl`
  margin-right: 0;
`;

const Businesstitle = styled.dt`
  color: rgba(34, 34, 34, 0.5);
  float: left;
  font-size: 13px;
  letter-spacing: -0.07px;
  line-height: 20px;
  margin-right: 4px;
  max-width: 653px;
`;
export default Footer;
