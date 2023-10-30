import React from "react";
import styled from "styled-components";
import { Image } from "@chakra-ui/react";

const brands = [
  "Stussy",
  "Cos",
  "Nike",
  "iab Studio",
  "Jordan",
  "Apple",
  "Army",
  "ASICS",
  "Adidas",
  "Supreme",
  "New Balance",
  "Arc'teryx",
  "Salomon",
  "Maison Kitsune",
  "Ugg",
];

const Shortcutcollection = () => {
  return (
    <div>
      <Containerline />
      <Containertitle>
        <Titlewrap>
          <Title>상위 15개 브랜드</Title>
          <Subtitle>인기 브랜드 상위 15개</Subtitle>
        </Titlewrap>
      </Containertitle>
      <Shortcutitemswrap>
        {brands.map((brand, index) => (
          <Shortcutitem key={index}>
            <Shortcutitemmgwrap>
              <Pictureshortcutitemmgbg>
                <Image
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  src={require(`../../../assets/images/shortimg/${brand.toLowerCase()}.jpg`)}
                  alt={brand}
                />
              </Pictureshortcutitemmgbg>
            </Shortcutitemmgwrap>
            <Shortcutitemtitle>{brand}</Shortcutitemtitle>
          </Shortcutitem>
        ))}
      </Shortcutitemswrap>
    </div>
  );
};

const Containerline = styled.div`
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
  color: #000;
  font-size: 17px;
  font-weight: 700;
`;

const Subtitle = styled.div`
  color: rgba(34, 34, 34, 0.5);
  font-size: 16px;
  margin-top: 2px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Shortcutitemswrap = styled.div`
  grid-row-gap: 16px;
  grid-column-gap: 8px;
  -webkit-column-gap: 8px;
  -moz-column-gap: 8px;
  column-gap: 8px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-right: 16px;
  row-gap: 16px;
`;

const Shortcutitemmgwrap = styled.div`
  border-radius: 10px;
`;

const Shortcutitem = styled.div``;

const Pictureshortcutitemmgbg = styled.picture``;

const Shortcutitemtitle = styled.p`
  color: #333;
  font-size: 15px;
  letter-spacing: -0.15px;
  margin-top: 8px;
  text-align: center;
`;

export default Shortcutcollection;
