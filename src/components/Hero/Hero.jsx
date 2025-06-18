import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ejaz Ahmed</h1>
        <p className={styles.description}>
          I'm a front-end developer with 2+ years of experience using HTML, CSS, TAILWIND, JAVASCRIPT, REACT and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:ejaz47026@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/ejaz-modified-modified.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
