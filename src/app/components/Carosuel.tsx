// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export interface ImageSliderType {
//   images: {
//     title: string;
//     url: string;
//   }[];
// }

// export default function BannerSlider(props: ImageSliderType) {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//   };

//   return (
//     <Slider {...settings} className="banner-slider">
//       {props?.images?.map((image, key) => (
//         <div
//           data-testid="banner-slider-item"
//           key={`${key.toString()}`}
//           style={{ backgroundImage: `url(${image?.url})` }}
//           className="h-screen w-full bg-cover bg-center object-center"
//         >
//           <img
//             alt={image?.title}
//             src={image?.url}
//             className="h-auto w-full object-cover object-center"
//           />
//         </div>
//       ))}
//     </Slider>
//   );
// }

// export function PrevArrow(props: any) {
//   return (
//     <div
//       {...props}
//       data-testid="image-slider-pre-arrow-buttons-container"
//       className="slick-arrow absolute left-0 top-[50%] z-10 rotate-180 cursor-pointer md:left-4 lg:block"
//     >
//       <svg
//         width="40"
//         height="41"
//         viewBox="0 0 40 41"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect
//           x="39.5"
//           y="1.3877"
//           width="39"
//           height="39"
//           rx="19.5"
//           transform="rotate(90 39.5 1.3877)"
//           stroke="none"
//           className="stroke-white hover:stroke-white"
//         />
//         <path
//           d="M20.4999 28.469L28.2906 20.6783M28.2906 20.6783L20.4999 12.8877M28.2906 20.6783H11.9999"
//           stroke="#E67200"
//           strokeLinecap="square"
//           className="stroke-white hover:stroke-white"
//         />
//       </svg>
//     </div>
//   );
// }

// export function NextArrow(props: any) { 
//   return (
//     <div
//       {...props}
//       data-testid="image-slider-next-arrow-buttons-container"
//       className="slick-arrow absolute right-0 top-[50%] cursor-pointer md:right-4 lg:block"
//     >
//       <svg
//         width="40"
//         height="41"
//         viewBox="0 0 40 41"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect
//           x="39.5"
//           y="1.3877"
//           width="39"
//           height="39"
//           rx="19.5"
//           transform="rotate(90 39.5 1.3877)"
//           stroke="#E67200"
//           className="stroke-white hover:stroke-white"
//         />
//         <path
//           d="M20.4999 28.469L28.2906 20.6783M28.2906 20.6783L20.4999 12.8877M28.2906 20.6783H11.9999"
//           stroke="#E67200"
//           strokeLinecap="square"
//           className="stroke-white hover:stroke-white"
//         />
//       </svg>
//     </div>
//   );
// }