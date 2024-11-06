'use client'

import React from "react";
import styles from "./home.module.css";
import Navbar from "./components/Navbar";
import DetailCard from "./components/card/details"
import dynamic from 'next/dynamic';

const BannerSlider = dynamic(() => import('./components/Carosuel'), { ssr: false });


export default function Home() {
  const images = [
    {
      title: 'Image 1',
      url: '/images/slider1.jpg',
    },
    {
      title: 'Image 2',
      url: '/images/slider2.png',
    },
    {
      title: 'Image 3',
      url: '/images/slider3.png',
    },
    {
      title: 'Image 4',
      url: '/images/slider4.png',
    },
    {
      title: 'Image 5',
      url: '/images/slider5.png',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <DetailCard />
        <div className="relative">
          <BannerSlider images={images} />
        </div>
      </div>
    </div>
  );
}
