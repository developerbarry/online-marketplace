import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


/* 
https://i.ibb.co.com/RhdKn3t/06.png
https://i.ibb.co.com/XtbvmKj/05.png
https://i.ibb.co.com/PTm1QZT/07.png
https://i.ibb.co.com/fQLTmvw/01.png
https://i.ibb.co.com/rd9zRFf/03.png
https://i.ibb.co.com/MD5Qtmy/02.png

*/

// import required modules
import { Pagination } from 'swiper/modules';

export default function BrandSection() {
  return (
    <>
      <section>
        <div className='container mx-auto'>
          <div className='font-onest pt-14'>
            <div className='text-center'>
              <h3 className='text-xl font-semibold text-center text-gray-800 capitalize mb-8'>We are trusted by the world’s leading brands</h3>
            </div>

            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper h-100vh md:h-20"
            >
              <SwiperSlide>
                <div className='flex flex-col md:flex-row pb-14 gap-5 justify-center items-center'>
                  <img src="https://i.ibb.co.com/RhdKn3t/06.png" alt="" />
                  <img src="https://i.ibb.co.com/XtbvmKj/05.png" alt="" />
                  <img src="https://i.ibb.co.com/PTm1QZT/07.png" alt="" />
                  <img src="https://i.ibb.co.com/fQLTmvw/01.png" alt="" />
                  <img src="https://i.ibb.co.com/rd9zRFf/03.png" alt="" />
                  <img src="https://i.ibb.co.com/MD5Qtmy/02.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col md:flex-row pb-14 gap-5 justify-center items-center'>
                  <img src="https://i.ibb.co.com/RhdKn3t/06.png" alt="" />
                  <img src="https://i.ibb.co.com/XtbvmKj/05.png" alt="" />
                  <img src="https://i.ibb.co.com/PTm1QZT/07.png" alt="" />
                  <img src="https://i.ibb.co.com/fQLTmvw/01.png" alt="" />
                  <img src="https://i.ibb.co.com/rd9zRFf/03.png" alt="" />
                  <img src="https://i.ibb.co.com/MD5Qtmy/02.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col md:flex-row pb-14 gap-5 justify-center items-center'>
                  <img src="https://i.ibb.co.com/RhdKn3t/06.png" alt="" />
                  <img src="https://i.ibb.co.com/XtbvmKj/05.png" alt="" />
                  <img src="https://i.ibb.co.com/PTm1QZT/07.png" alt="" />
                  <img src="https://i.ibb.co.com/fQLTmvw/01.png" alt="" />
                  <img src="https://i.ibb.co.com/rd9zRFf/03.png" alt="" />
                  <img src="https://i.ibb.co.com/MD5Qtmy/02.png" alt="" />
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
