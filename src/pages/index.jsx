import React from "react";
import Layout from "../components/layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import intro from "../assets/images/Adidas-intro.jpg";
import Shortcutitemswrap from "../components/layout/main/Shortcutitemswrap";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Container } from "@chakra-ui/react";
import Homeproducts from "../components/layout/main/Homeproducts";

const Home = () => {
  const imageStyle = {
    width: "100%",
    height: "700px",
  };
  return (
    <Layout title="Home" pagename="home">
      <Swiper navigation={false} className="mySwiper">
        <SwiperSlide>
          <img
            src={intro}
            alt="main intro"
            className="main-intro1"
            style={imageStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={intro}
            alt="main intro"
            className="main-intro1"
            style={imageStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={intro}
            alt="main intro"
            className="main-intro1"
            style={imageStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={intro}
            alt="main intro"
            className="main-intro1"
            style={imageStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={intro}
            alt="main intro"
            className="main-intro1"
            style={imageStyle}
          />
        </SwiperSlide>
      </Swiper>
      <Shortcutitemswrap></Shortcutitemswrap>
      <Homeproducts></Homeproducts>
    </Layout>
  );
};
export default Home;
