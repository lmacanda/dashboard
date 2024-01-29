"use client";
import styles from "./styles.module.scss";

import { Player } from "@lottiefiles/react-lottie-player";

//useEffect to render the aimation and the text at the same time

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <Player
          src="https://lottie.host/4e936d28-cdfc-460f-8d51-0d8eb0eefed0/QrREcufVmZ.json"
          loop
          autoplay
          className={styles.hero_animation}
        />
        <div className={styles.hero_text}>
          <h1>Keep your Business organized in just one application</h1>
        </div>
      </div>
    </>
  );
}
