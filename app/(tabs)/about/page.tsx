// "use client";
// import React from "react";
// import type { Settings } from "react-slick";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function About() {
//   const settings: Settings = {
//     dots: true, // dots 활성화
//     infinite: true, // 무한 루프
//     speed: 500, // 애니메이션 속도
//     slidesToShow: 2, // 한 번에 보여줄 이미지 개수
//     slidesToScroll: 1, // 넘길 이미지 개수
//     autoplay: true, // 자동 슬라이드
//     autoplaySpeed: 2000, // 자동 슬라이드 시간 (ms)
//     lazyLoad: "ondemand" as const, // lazy load
//     customPaging: (i: number) => (
//       <button className="p-2 bg-blue-500 text-white rounded-full">
//         {i + 1}
//       </button>
//     ), // 번호로 네비게이션 표시
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       <h1 className="text-2xl font-bold mb-4">ABOUT</h1>

//       {/* 슬라이더 컴포넌트 */}
//       <img src="/1.png" alt="About Image" className="w-full h-64 object-cover mb-4" />
//       <div className="slider-container"> {/* 슬라이더의 부모 컨테이너 */}
//         <Slider {...settings}>
//           <div>
//             <img
//               src="/1.png"
//               alt="About Image 1"
//               className="w-full h-80 object-cover mb-4"
//             />
//           </div>
//           <div>
//             <img
//               src="/2.png"
//               alt="About Image 2"
//               className="w-full h-80 object-cover mb-4"
//             />
//           </div>
//           <div>
//             <img
//               src="/3.png"
//               alt="About Image 3"
//               className="w-full h-80 object-cover mb-4"
//             />
//           </div>
//           <div>
//             <img
//               src="/4.png"
//               alt="About Image 4"
//               className="w-full h-80 object-cover mb-4"
//             />
//           </div>
//           <div>
//             <img
//               src="/5.png"
//               alt="About Image 5"
//               className="w-full h-80 object-cover mb-4"
//             />
//           </div>
//           <div>
//             <img
//               src="/6.png"
//               alt="About Image 6"
//               className="w-full h-80 object-cover mb-4"
//             />
//           </div>
//           <div>
//             <img
//               src="/7.png"
//               alt="About Image 7"
//               className="w-full h-80 object-cover mb-4"
//             />
//           </div>
//           <div>
//             <img
//               src="/8.png"
//               alt="About Image 8"
//               className="w-full h-80 object-cover mb-4"
//             />
//           </div>
//           <div>
//             <img
//               src="/9.png"
//               alt="About Image 9"
//               className="w-full h-80 object-cover mb-4"
//             />
//           </div>
//           <div>
//             <img
//               src="/10.png"
//               alt="About Image 10"
//               className="w-full h-80 object-cover mb-4"
//             />
//           </div>
//           <div>
//             <img
//               src="/11.png"
//               alt="About Image 11"
//               className="w-full h-80 object-cover mb-4"
//             />
//           </div>
//           {/* 다른 이미지들 추가 */}
//         </Slider>
//       </div>

      
//     </div>
//   );
// }

// components/AboutSlider.tsx
"use client";
// components/AboutSlider.tsx

import { Swiper, SwiperSlide } from "swiper/react"; // Swiper와 SwiperSlide 가져오기
import { Autoplay } from "swiper/modules"; // Swiper 모듈 추가
import "swiper/css"; // Swiper 기본 스타일
import React from "react";

export default function AboutSlider() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">ABOUT</h1>
      {/* 슬라이더 */}
      <div className="w-full max-w-4xl slider-container">
        <Swiper
          modules={[Autoplay]} // Swiper에 필요한 모듈 등록
          slidesPerView={1} // 한 번에 보여줄 슬라이드 개수
          spaceBetween={20} // 슬라이드 간 간격
          autoplay={{
            delay: 2000, // 자동 재생 시간 (ms)
            disableOnInteraction: false, // 사용자 조작 후에도 자동 재생 유지
          }}
        >
          {/* 슬라이드 아이템 */}
          {Array.from({ length: 11 }, (_, i) => (
            <SwiperSlide key={i}>
              <img
                src={`/${i + 1}.png`} // 이미지 경로
                alt={`About Image ${i + 1}`}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
}


