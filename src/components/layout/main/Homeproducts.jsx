import React from "react";
import styled from "styled-components";

import thumb1 from "../../../assets/images/adidas.jpg";
import thumb2 from "../../../assets/images/suprem1.png";
import thumb3 from "../../../assets/images/bomeronike.jpg";
import thumb4 from "../../../assets/images/shotnorthface.jpg";
import thumb5 from "../../../assets/images/yellow nike.jpg";
import { Link } from "react-router-dom";
import { Image, Text } from "@chakra-ui/react";

const HomeProducts = () => {
  return (
    <div>
      <Productline></Productline>
      <Containertitle>
        <Titlewrap>
          <Title>Just Dropped</Title>
          <Subtitle>발매 상품</Subtitle>
        </Titlewrap>
        <Plusbtn>
          <Link to="#" className="Containerdestination">
            더보기
          </Link>
        </Plusbtn>
      </Containertitle>
      <Productlistwrap>
        <Productlistfirst>
          <Productitem>
            <Link to="#" className="Iteminner">
              <Thumbbox>
                <img src={thumb1} alt="supreme" />
              </Thumbbox>
              <Infobox>
                <Brand>
                  <Brandtext>Adidas</Brandtext>
                </Brand>
                <Name>
                  Adidas x Wales Bonner Pony Tonal Samba Core Black Cream White{" "}
                </Name>
                <Price>
                  <Amountlg>
                    <Num>279,000원</Num>
                  </Amountlg>
                  <Desc>
                    <p>즉시 구매가</p>
                  </Desc>
                </Price>
              </Infobox>
            </Link>
          </Productitem>
          <Productitem>
            <Link to="#" className="Iteminner">
              <Thumbbox>
                <img src={thumb2} alt="supreme" />
              </Thumbbox>
              <Infobox>
                <Brand>
                  <Brandtext>Supreme</Brandtext>
                </Brand>
                <Name>
                  Supreme x Stone Island Denim Trucker Jacket Reflective - 23FW
                </Name>
                <Price>
                  <Amountlg>
                    <Num>1,824,000원</Num>
                  </Amountlg>
                  <Desc>
                    <Text>즉시 구매가</Text>
                  </Desc>
                </Price>
              </Infobox>
            </Link>
          </Productitem>
          <Productitem>
            <Link to="#" className="Iteminner">
              <Thumbbox>
                <Image src={thumb3} alt="supreme" />
              </Thumbbox>
              <Infobox>
                <Brand>
                  <Brandtext>Nike</Brandtext>
                </Brand>
                <Name>Nike Zoom Vomero 5 Light Bone and Phantom </Name>
                <Price>
                  <Amountlg>
                    <Num>190,000원</Num>
                  </Amountlg>
                  <Desc>
                    <p>즉시 구매가</p>
                  </Desc>
                </Price>
              </Infobox>
            </Link>
          </Productitem>
          <Productitem>
            <Link to="#" className="Iteminner">
              <Thumbbox>
                <Image src={thumb4} alt="supreme" />
              </Thumbbox>
              <Infobox>
                <Brand>
                  <Brandtext>The North Face</Brandtext>
                </Brand>
                <Name>
                  (W) The North Face White Label Novelty Nuptse Down Vest Brown{" "}
                </Name>
                <Price>
                  <Amountlg>
                    <Num>249,000원</Num>
                  </Amountlg>
                  <Desc>
                    <p>즉시 구매가</p>
                  </Desc>
                </Price>
              </Infobox>
            </Link>
          </Productitem>
          <Productitem>
            <Link to="#" className="Iteminner">
              <Thumbbox>
                <img src={thumb5} alt="supreme" />
              </Thumbbox>
              <Infobox>
                <Brand>
                  <Brandtext>Nike</Brandtext>
                </Brand>
                <Name>
                  Nike x Off-White Air Force 1 Mid SP Leather Varsity Maize{" "}
                </Name>
                <Price>
                  <Amountlg>
                    <Num>220,000원</Num>
                  </Amountlg>
                  <Desc>
                    <p>즉시 구매가</p>
                  </Desc>
                </Price>
              </Infobox>
            </Link>
          </Productitem>
        </Productlistfirst>
      </Productlistwrap>
      <Btnproducts>
        <Link to="#" className="Btnoutlinegrey">
          더보기
        </Link>
      </Btnproducts>
    </div>
  );
};

const Productline = styled.div`
  margin: 56px auto 40px;
  &::before {
    background: #ebebeb;
    content: "";
    display: block;
    height: 1px;
    margin: 28px auto 20px;
    max-width: 1280px;
    width: 100%;
  }
`;
const Containertitle = styled.div`
  max-width: 1280px;
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
`;

const Titlewrap = styled.div`
  flex: 1;
`;

const Title = styled.div`
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
`;

const Subtitle = styled.div`
  color: rgba(34, 34, 34, 0.5);
  font-size: 16px;
  margin-top: 2px;
`;

const Plusbtn = styled.div`
  a {
    color: rgba(34, 34, 34, 0.5);
    font-size: 13px;
    letter-spacing: -0.07px;
  }
`;

const Productlistwrap = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

const Productlistfirst = styled.div`
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-column-gap: 8px;
  grid-row-gap: 28px;
  -webkit-column-gap: 8px;
  -moz-column-gap: 8px;
  column-gap: 8px;
  display: grid;
  row-gap: 28px;
`;

const Productitem = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Thumbbox = styled.div`
  img {
    border-radius: 10px;
    background-color: #f4f4f4;
  }
`;

const Infobox = styled.div`
  padding-top: 9px;
`;

const Brand = styled.div``;

const Brandtext = styled.p`
  color: #222;
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  height: 17px;
  line-height: 17px;
  max-width: 100%;
  overflow: hidden;
  padding-bottom: 2px;
  text-overflow: ellipsis;
  vertical-align: top;
  white-space: nowrap;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
`;

const Name = styled.p`
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #222;
  display: -webkit-box;
  font-size: 13px;
  line-height: 16px;
  max-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  width: 254px;
`;

const Price = styled.div`
  padding-top: 12px;
`;

const Amountlg = styled.div``;

const Num = styled.em`
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.04px;
  line-height: 17px;
  vertical-align: top;
  color: #000;
`;

const Desc = styled.div`
  color: rgba(34, 34, 34, 0.5);
  font-size: 11px;
  line-height: 13px;
  margin-top: 2px;
`;

const Btnproducts = styled.div`
  padding: 0 32px;
  text-align: center;
  .Btnoutlinegrey {
    margin-top: 20px;
    padding: 0 30px;
    border: 1px solid #d3d3d3;
    color: rgba(34, 34, 34, 0.8);
    border-radius: 12px;
    font-size: 14px;
    height: 42px;
    letter-spacing: -0.14px;
    align-items: center;
    background-color: #fff;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
  }
`;
export default HomeProducts;
