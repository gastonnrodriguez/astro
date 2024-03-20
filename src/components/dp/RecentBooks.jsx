import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Ediciones = data => {
  const posts = data.data;
  return (
    <div>
        <Swiper
        className="max-w-screen-lg mx-auto"
        modules={[Navigation]}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        spaceBetween={15}
        slidesPerView={5}
      >
            {posts.map((post, index) => (
          <SwiperSlide key={post.id} className="">
            <div class="flex flex-col items-center justify-center w-full h-full max-w-sm mx-auto rounded-lg shadow-lg">
              <img
                class="object-cover"
                src={post.featuredImage?.node.sourceUrl} 
                alt={post.title} 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Ediciones