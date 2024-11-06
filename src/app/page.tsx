'use client'

import React from "react";
import styles from "./home.module.css";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";

const BannerSlider = dynamic(() => import("./components/Carosuel"), {
  ssr: false,
});

export default function Home() {
  const images = [
    {
      title: "Image 1",
      url: "/images/background.png",
      content:
        "Lörem ipsum laktigt vaska. Ott neresamma ifall fyning. Diheten pseudotion. Hotelljournalist ibel äns inte gåktiga i är.Preligen esk.",
      heading: "Mobile Offers Banner",
      label: "Explore More",
      heading2: "",
      content2: "",
    },
    {
      title: "Image 2",
      url: "/images/slider2.png",
      content:
        "Lörem ipsum laktigt vaska. Ott neresamma ifall fyning. Diheten pseudotion. Hotelljournalist ibel äns inte gåktiga i är.Preligen esk.",
      heading: "4G LTE Coverage",
      label: "Coverage Map",
      heading2: "",
      content2: "",
    },
    {
      title: "Image 3",
      url: "/images/slider3.png",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
      heading: "Welcome Aboard",
      label: "Log In",
      heading2: "",
      content2: "",
    },
    {
      title: "Image 4",
      url: "/images/slider5.png",
      content:
        "Lörem ipsum laktigt vaska. Ott neresamma ifall fyning. Diheten pseudotion. Hotelljournalist ibel äns inte gåktiga i är.Preligen esk.",
      heading: "Map Locator",
      label: "",
      heading2: "",
      content2: "",
    },
    {
      title: "Image 5",
      url: "/images/slider6.jpg",
      content:
        "Lörem ipsum laktigt vaska. Ott neresamma ifall fyning. Diheten pseudotion. Hotelljournalist ibel äns inte gåktiga i är.Preligen esk.",
      heading: "ENTERPRISE",
      label: "Explore More",
      heading2: "SMALL BUSINESS",
      content2:
        "Enhance the productivity and value of your business with the our latest and innovative ICT products and solutions",
    },
  ];

  const icons = [
    { iconUrl: '/images/compass.png', label: 'Explore' },
    { iconUrl: '/images/person.png', label: 'Personal' },
    { iconUrl: '/images/bag.png', label: 'Business' },
    { iconUrl: '/images/entertainment.png', label: 'Entertainment' },
    { iconUrl: '/images/shop.png', label: 'Shop' },
    { iconUrl: '/images/heart.png', label: 'E-Channeling' },
  ];
  
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <div className="relative">
          <BannerSlider images={images} icons={icons} />
        </div>
      </div>
    </div>
  );
}
