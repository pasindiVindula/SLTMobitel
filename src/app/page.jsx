import React from "react";
import styles from "./home.module.css";
import Navbar from "./components/navbar/page";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <div className={styles.container}> 
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
      {/* <Image
          alt="SLTMobitel Background"
          src="/images/background.png"
          layout="fill"
          objectfit="cover"
          priority="true"
        /> */}
      </div>
    </div>
  );
}
