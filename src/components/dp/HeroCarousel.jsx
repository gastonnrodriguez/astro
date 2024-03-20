// Import Swiper React components
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/styles/custom.css"
const HeroCarousel = data => {
  const posts = data.data;
  return (
    <div className="container mx-auto">
      <Swiper
        className="main-carousel max-w-screen-lg mx-auto"
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {posts.map((post, index) => (
          <SwiperSlide
            key={post.id}
            className=""
          >
            <div className="bg-cover bg-no-repeat bg-center main-carousel flex items-center justify-center bg-blend-soft-light">
              <img src={post.featuredImage?.node.sourceUrl} alt="Image description" className="object-cover"/>
              <div class="absolute inset-0 flex justify-center items-center">
                    <div class="absolute inset-0 flex justify-center items-center">
                      <h2 className="text-center text-2xl font-bold text-white">
                      {post.title}
                      </h2>
                      <div className="description absolute inset-0 flex justify-center items-center">
                          <p>{post.author.node.name}</p>
                          <p>{post.date}</p>
                          <p>{post.categories.nodes[0].name}</p>
                      </div>
                    </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
