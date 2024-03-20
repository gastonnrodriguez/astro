import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Ediciones = () => {
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
          <SwiperSlide className="">
            <div class="flex flex-col items-center justify-center w-full h-full max-w-sm mx-auto rounded-lg shadow-lg">
              <img
                class="object-cover"
                src="https://dialogopolitico.org/wp-content/uploads/2024/01/Portada-en-espanol-scaled.webp"
                alt="china"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="flex flex-col items-center justify-center w-full h-full max-w-sm mx-auto rounded-lg shadow-lg">
              <img
                class="object-cover"
                src="https://dialogopolitico.org/wp-content/uploads/2024/02/ING-Tapa-Dialogo-Politico-2023--scaled.jpg.webp"
                alt="china"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="flex flex-col items-center justify-center w-full h-full max-w-sm mx-auto rounded-lg shadow-lg">
              <img
                class="object-cover"
                src="https://dialogopolitico.org/wp-content/uploads/2022/09/Portada-Dia%CC%81logo-Poli%CC%81tico-Elecciones.jpg.webp"
                alt="china"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="flex flex-col items-center justify-center w-full h-full max-w-sm mx-auto rounded-lg shadow-lg">
              <img
                class="object-cover"
                src="https://dialogopolitico.org/wp-content/uploads/2023/06/eleicoes.jpg.webp"
                alt="china"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="flex flex-col items-center justify-center w-full h-full max-w-sm mx-auto rounded-lg shadow-lg">
              <img
                class="object-cover"
                src="https://dialogopolitico.org/wp-content/uploads/2022/11/Campan%CC%83as-Electorales.jpeg.webp"
                alt="china"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="flex flex-col items-center justify-center w-full h-full max-w-sm mx-auto rounded-lg shadow-lg">
              <img
                class="object-cover"
                src="https://dialogopolitico.org/wp-content/uploads/2022/11/campanhas-eleitorais.png.webp"
                alt="china"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="flex flex-col items-center justify-center w-full h-full max-w-sm mx-auto rounded-lg shadow-lg">
              <img
                class="object-cover"
                src="https://dialogopolitico.org/wp-content/uploads/2022/11/El-futuro-de-los-partidos-politicos.jpeg.webp"
                alt="china"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="flex flex-col items-center justify-center w-full h-full max-w-sm mx-auto rounded-lg shadow-lg">
              <img
                class="object-cover"
                src="https://dialogopolitico.org/wp-content/uploads/2022/11/Crisis-Ciencia-y-Poli%CC%81tica.jpeg.webp"
                alt="china"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="flex flex-col items-center justify-center w-full h-34 max-w-sm mx-auto rounded-lg shadow-lg">
              <img
                class="object-cover"
                src="https://dialogopolitico.org/wp-content/uploads/2022/11/Edicio%CC%81n-especial-Seguridad.jpeg.webp"
                alt="china"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="flex flex-col items-center justify-center h-full max-w-sm mx-auto rounded-lg shadow-lg">
              <img
                class="object-cover"
                src="https://dialogopolitico.org/wp-content/uploads/2022/11/Poli%CC%81tica-y-ambiente.webp"
                alt="china"
              />
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Ediciones