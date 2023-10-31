import React from "react";
import Layout from "../components/layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import intro from "../assets/images/swiper1.jpg";
import intro1 from "../assets/images/swiper2.jpg";
import intro2 from "../assets/images/swiper3.jpg";
import intro3 from "../assets/images/swiper4.jpg";
import intro4 from "../assets/images/swiper5.jpg";

import Shortcutitemswrap from "../components/layout/main/Shortcutitemswrap";
import Homeproducts from "../components/layout/main/Homeproducts";
import Shortcutcollection from "../components/layout/main/Shortcutcollection";
import Homeproductstwo from "../components/layout/main/Homeproductstwo";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Container, Image } from "@chakra-ui/react";
import Bannersingle from "../components/layout/main/Bannersingle";

const Home = () => {
  return (
    <Layout title="Home" pagename="home">
      <SwiperStyled
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <Swiper1>
          <Image
            src={intro}
            alt="main intro"
            className="main-intro1"
            width="100%"
            height="460px"
            objectFit="contain"
          />
        </Swiper1>
        <Swiper2>
          <Image
            src={intro1}
            alt="main intro"
            className="main-intro1"
            width="100%"
            height="460px"
            objectFit="contain"
          />
        </Swiper2>
        <Swiper3>
          <Image
            src={intro2}
            alt="main intro"
            className="main-intro1"
            width="100%"
            height="460px"
            objectFit="contain"
          />
        </Swiper3>
        <Swiper4>
          <Image
            src={intro3}
            alt="main intro"
            className="main-intro1"
            width="100%"
            height="460px"
            objectFit="contain"
          />
        </Swiper4>
        <Swiper5>
          <Image
            src={intro4}
            alt="main intro"
            className="main-intro1"
            width="100%"
            height="460px"
            objectFit="contain"
          />
        </Swiper5>
      </SwiperStyled>
      <Shortcutitemswrap></Shortcutitemswrap>
      <Homeproducts></Homeproducts>
      <Shortcutcollection></Shortcutcollection>
      <Bannersingle></Bannersingle>
      <Homeproductstwo></Homeproductstwo>
    </Layout>
  );
};

const SwiperStyled = styled(Swiper)`
  height: 460px;
  .swiper-button-prev {
    color: #fff;
  }
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    color: #fff;
  }
`;

const Swiper1 = styled(SwiperSlide)`
  background-color: rgb(251, 224, 191);
`;
const Swiper2 = styled(SwiperSlide)`
  background-color: #e0dfdd;
`;
const Swiper3 = styled(SwiperSlide)`
  background-color: #c8d8ae;
`;
const Swiper4 = styled(SwiperSlide)`
  background-color: #bfcdd2;
`;
const Swiper5 = styled(SwiperSlide)`
  background-color: rgb(31, 65, 237);
`;
export default Home;
