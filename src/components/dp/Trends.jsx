// Import Swiper React components
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const LatestPosts = (data) => {
  const posts = data.data;
  return (
    <div className="container mx-auto py-4">
      <Swiper
        className="latest-carousel max-w-screen-lg mx-auto"
        modules={[Navigation, Scrollbar, Autoplay]}
        centeredSlides={false}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={5}
        slidesPerView={4}
      >
        {posts.map((post, index) => (
          <SwiperSlide key={post.id} className="">
            <div class="flex flex-col items-center justify-center w-full h-full max-w-sm mx-auto ">
              <img
                class="w-full h-48 object-cover "
                src={post.featuredImage?.node.sourceUrl}
                alt={post.title}
              />
              <div class="p-4">
                <h2 class="text-sm font-bold">{post.title}</h2>
                <p class="text-xs text-gray-700">{post.author.node.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestPosts;
