import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { BRANDS } from '@/data';

function Brand() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      let slides: number = 1;

      if (window.innerWidth > 1136) {
        slides = 3;
      }

      if (window.innerWidth < 1136) {
        slides = 2;
      }

      if (window.innerWidth < 600) {
        slides = 1;
      }

      setSlidesPerView(slides);
    };

    if (typeof window !== 'undefined') {
      handleResize();

      window.addEventListener('onload', handleResize);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('onload', handleResize);
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <Swiper spaceBetween={50} slidesPerView={slidesPerView}>
      {BRANDS.map((brand) => (
        <SwiperSlide key={JSON.stringify(brand)}>
          <Image className="brand-img m-auto" src={brand.img} width={150} height={50} alt="brand" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Brand;
