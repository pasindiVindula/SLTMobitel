import React from "react";
import styles from "./home.module.css";
import Navbar from "./components/Navbar";
// import BannerSlider from "./components/Carosuel";
import DetailCard from "./components/card/details"

export default function Home() {
  // const images = [
  //   {
  //     title: 'Image 1',
  //     url: '/images/slider1.jpg',
  //   },
  //   {
  //     title: 'Image 2',
  //     url: '/images/slider2.jpg',
  //   },
  //   {
  //     title: 'Image 3',
  //     url: '/images/slider3.jpg',
  //   },
  //   {
  //     title: 'Image 4',
  //     url: '/images/slider4.jpg',
  //   },
  //   {
  //     title: 'Image 5',
  //     url: '/images/slider5.jpg',
  //   },
  // ];
  return (
    <div className={styles.container}> 
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <DetailCard/>
      {/* <BannerSlider images={images}/> */}
      </div>
    </div>
  );
}
