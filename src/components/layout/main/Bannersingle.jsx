import React from "react";
import { Image } from "@chakra-ui/react";
import sbnr from "../../../assets/images/singlebnr.jpg";
import styled from "styled-components";

const Bannersingle = () => {
  return (
    <Banneritem>
      <Iteminner>
        <Imgbox>
          <Image
            height="100%"
            left="17%"
            max-height="480px"
            position="absolute"
            top="0"
            transform="translatX(-50%)"
            src={sbnr}
            alt="#"
          />
        </Imgbox>
      </Iteminner>
    </Banneritem>
  );
};

const Banneritem = styled.div`
  background-color: #87cbe0;
  position: relative;
  margin-top: 5%;
  z-index: 20000;
`;

const Iteminner = styled.div`
  margin: 0 auto;
  max-height: 480px;
  width: 45vw;
`;

const Imgbox = styled.div`
  padding-top: 100%;
`;
export default Bannersingle;
