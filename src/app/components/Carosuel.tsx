import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@nextui-org/react";

export interface ImageSliderType {
  images: {
    title: string;
    url: string;
    description?: string;
    heading: string;
    content: string;
    label: string;
    heading2: string;
    content2: string;
  }[];
}

export default function BannerSlider({ images }: ImageSliderType) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings} className="banner-slider">
      {images.map((image, index) => (
        <div key={index} data-testid="banner-slider-item" className="relative">
          <img
            alt={image.title}
            src={image.url}
            className="h-auto w-full object-cover object-center bg-black bg-opacity-40"
          />
          <div className="absolute inset-y-0 right-0 w-1/2 flex flex-col items-center justify-center text-center text-white p-4">
            <div className="w-1/2 text-left space-y-6">
              <h2 className="text-3xl font-bold">{image.heading}</h2>
              <div>{image.content}</div>
              {image.heading2 && (
                <div>
                  <h2 className="text-3xl font-bold">{image.heading2}</h2>
                  <div>{image.content2}</div>
                </div>
              )}
              {image.label && (
                <Button radius="full" className="bg-[#1055A7] text-white">
                  {image.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export function PrevArrow({ currentSlide, slideCount, ...props }: any) {
  return (
    <div
      {...props}
      data-testid="image-slider-pre-arrow-buttons-container"
      className="slick-arrow absolute left-0 top-[40%] z-10 rotate-180 cursor-pointer md:left-4 lg:block"
    >
      {/* SVG for Previous Arrow */}
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="39.5"
          y="1.3877"
          width="39"
          height="39"
          rx="19.5"
          transform="rotate(90 39.5 1.3877)"
          stroke="none"
          className="stroke-white hover:stroke-white"
        />
        <path
          d="M20.4999 28.469L28.2906 20.6783M28.2906 20.6783L20.4999 12.8877M28.2906 20.6783H11.9999"
          stroke="#E67200"
          strokeLinecap="square"
          className="stroke-white hover:stroke-white"
        />
      </svg>
    </div>
  );
}

export function NextArrow({ currentSlide, slideCount, ...props }: any) {
  return (
    <div
      {...props}
      data-testid="image-slider-next-arrow-buttons-container"
      className="slick-arrow absolute right-0 top-[40%] cursor-pointer md:right-9 lg:block"
    >
      {/* SVG for Next Arrow */}
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="39.5"
          y="1.3877"
          width="39"
          height="39"
          rx="19.5"
          transform="rotate(90 39.5 1.3877)"
          stroke="#E67200"
          className="stroke-white hover:stroke-white"
        />
        <path
          d="M20.4999 28.469L28.2906 20.6783M28.2906 20.6783L20.4999 12.8877M28.2906 20.6783H11.9999"
          stroke="#E67200"
          strokeLinecap="square"
          className="stroke-white hover:stroke-white"
        />
      </svg>
    </div>
  );
}
