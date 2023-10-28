import React from "react";
import Layout from "../components/layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import intro from "../assets/images/intro.jpeg";

import "../css/index.module.css";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Home = () => {
  return (
    <Layout title="Home" pagename="home">
      <Swiper navigation={false} className="mySwiper">
        <SwiperSlide>
          <img src={intro} alt="main intro" className="main-intro" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Layout>
  );
};

export default Home;
