import React from "react";
import Layout from "../components/layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import intro from "../assets/images/swiper1.jpg";
import intro2 from "../assets/images/swiper3.jpg";
import intro3 from "../assets/images/swiper2.jpg";
import Shortcutitemswrap from "../components/layout/main/Shortcutitemswrap";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Container, Image } from "@chakra-ui/react";
import Homeproducts from "../components/layout/main/Homeproducts";

const Home = () => {
  return (
    <Layout title="Home" pagename="home">
      <SwiperStyled navigation={true} className="mySwiper">
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
            src={intro2}
            alt="main intro"
            className="main-intro1"
            width="100%"
            height="460px"
            objectFit="contain"
          />
        </Swiper2>
        <Swiper3>
          <Image
            src={intro3}
            alt="main intro"
            className="main-intro1"
            width="100%"
            height="460px"
            objectFit="contain"
          />
        </Swiper3>
        <SwiperSlide>
          <Image
            src={intro}
            alt="main intro"
            className="main-intro1"
            width="100%"
            height="460px"
            objectFit="contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={intro}
            alt="main intro"
            className="main-intro1"
            width="100%"
            height="460px"
            objectFit="contain"
          />
        </SwiperSlide>
      </SwiperStyled>
      <Shortcutitemswrap></Shortcutitemswrap>
      <Homeproducts></Homeproducts>
    </Layout>
  );
};

const SwiperStyled = styled(Swiper)`
  height: 460px;
`;

const Swiper1 = styled(SwiperSlide)`
  background-color: rgb(251, 224, 191);
`;

const Swiper2 = styled(SwiperSlide)`
  background-color: #e0dfdd;
`;
const Swiper3 = styled(SwiperSlide)`
  background-color: rgb(31, 65, 237);
`;
export default Home;
