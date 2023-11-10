import { Image, Link, Text } from "@chakra-ui/react";
import React from "react";

import hpro1 from "../../../assets/images/northface.jpg";
import hpro2 from "../../../assets/images/nikeairforce.jpg";
import hpro3 from "../../../assets/images/northface2.jpg";
import hpro4 from "../../../assets/images/nikeacg.jpg";
import hpro5 from "../../../assets/images/northface3.jpg";
import styled from "styled-components";

const Homeproductstwo = () => {
  return (
    <div>
      <Containertitle>
        <Titlewrap>
          <Title>Most Popular</Title>
          <Subtitle>인기 상품</Subtitle>
        </Titlewrap>
      </Containertitle>
      <Productlistwrap>
        <Productlist>
          <Productitem>
            <Link href="#">
              <Thumbox>
                <Product>
                  <Pictureproductimg>
                    <Image objectFit="cover" src={hpro1} alt="#" />
                  </Pictureproductimg>
                </Product>
              </Thumbox>
              <Infobox>
                <Brand>
                  <Brandtext> The North Face </Brandtext>
                </Brand>
                <Name>The North Face 1996 Eco Nuptse Jacket Black</Name>
                <Price>
                  <Amount>
                    <Num> 293,000원 </Num>
                  </Amount>
                  <Desc>
                    <Text>즉시 구매가</Text>
                  </Desc>
                </Price>
              </Infobox>
            </Link>
          </Productitem>
          <Productitem>
            <Link href="#">
              <Thumbox>
                <Product>
                  <Pictureproductimg>
                    <Image objectFit="cover" src={hpro2} alt="#" />
                  </Pictureproductimg>
                </Product>
              </Thumbox>
              <Infobox>
                <Brand>
                  <Brandtext> Nike </Brandtext>
                </Brand>
                <Name>Nike Air Force 1 '07 WB Flax</Name>
                <Price>
                  <Amount>
                    <Num> 142,000원 </Num>
                  </Amount>
                  <Desc>
                    <Text>즉시 구매가</Text>
                  </Desc>
                </Price>
              </Infobox>
            </Link>
          </Productitem>
          <Productitem>
            <Link href="#">
              <Thumbox>
                <Product>
                  <Pictureproductimg>
                    <Image objectFit="cover" src={hpro3} alt="#" />
                  </Pictureproductimg>
                </Product>
              </Thumbox>
              <Infobox>
                <Brand>
                  <Brandtext> The North Face </Brandtext>
                </Brand>
                <Name>The North Face 1996 Eco Nuptse Jacket Real Black</Name>
                <Price>
                  <Amount>
                    <Num> 283,000원 </Num>
                  </Amount>
                  <Desc>
                    <Text>즉시 구매가</Text>
                  </Desc>
                </Price>
              </Infobox>
            </Link>
          </Productitem>
          <Productitem>
            <Link href="#">
              <Thumbox>
                <Product>
                  <Pictureproductimg>
                    <Image objectFit="cover" src={hpro4} alt="#" />
                  </Pictureproductimg>
                </Product>
              </Thumbox>
              <Infobox>
                <Brand>
                  <Brandtext> Nike </Brandtext>
                </Brand>
                <Name>
                  Nike ACG Therma-Fit ADV Lunar Lake Puffer Jacket Balck - Asia
                </Name>
                <Price>
                  <Amount>
                    <Num> 311,000원 </Num>
                  </Amount>
                  <Desc>
                    <Text>즉시 구매가</Text>
                  </Desc>
                </Price>
              </Infobox>
            </Link>
          </Productitem>
          <Productitem>
            <Link href="#">
              <Thumbox>
                <Product>
                  <Pictureproductimg>
                    <Image
                      objectFit="cover"
                      width="100%"
                      height="100%"
                      src={hpro5}
                      alt="#"
                    />
                  </Pictureproductimg>
                </Product>
              </Thumbox>
              <Infobox>
                <Brand>
                  <Brandtext> The North Face </Brandtext>
                </Brand>
                <Name>
                  (W) The North Face White Label Novelty Nuptse Down Jacket
                  Black
                </Name>
                <Price>
                  <Amount>
                    <Num> 294,000원 </Num>
                  </Amount>
                  <Desc>
                    <Text>즉시 구매가</Text>
                  </Desc>
                </Price>
              </Infobox>
            </Link>
          </Productitem>
        </Productlist>
      </Productlistwrap>
      <Btnproduct>
        <Link href="#" className="Btnoutlinegrey">
          더보기
        </Link>
      </Btnproduct>
    </div>
  );
};

const Containertitle = styled.div`
  max-width: 1280px;
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
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
  color: #000;
  font-size: 17px;
  font-weight: 700;
`;

const Subtitle = styled.div`
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(34, 34, 34, 0.5);
  font-size: 16px;
  margin-top: 2px;
`;

const Productlistwrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-right: 40px;
`;
const Productlist = styled.div`
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

const Thumbox = styled.div``;

const Product = styled.div`
  background-color: #f4f4f4;
  border-radius: 8px;
  overflow: hidden;
  padding-top: 100%;
  position: relative;
`;

const Pictureproductimg = styled.picture`
  height: auto;
  width: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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
`;

const Price = styled.div`
  padding-top: 12px;
`;

const Amount = styled.div``;

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

const Btnproduct = styled.div`
  padding: 0 32px;
  text-align: center;
  padding-bottom: 50px;
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

export default Homeproductstwo;
