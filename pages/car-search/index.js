import Head from "next/head";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SearchBanner from "../../components/SearchBanner";
import SearchSidebar from "../../components/SearchSidebar";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    const event = window.addEventListener("scroll", toggleVisible);

    return () => event;
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Yatri Cabs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={styles.sectionSearchHeader}>
          <Navbar />
          <SearchBanner />
        </div>
        <div className={styles.sectionSearchBody}>
          <SearchSidebar />
        </div>
        <Footer />
        <img
          src="/bx-up-arrow-alt.svg"
          onClick={scrollToTop}
          style={{
            zIndex: "100",
            position: "fixed",
            height: "40px",
            width: "40px",
            bottom: "5vh",
            right: "1.8rem",
            boderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "#ef3f3e",
            cursor: "pointer",
            display: visible ? "inline" : "none",
          }}
          className={styles.tapTop}
        />
      </div>
    </div>
  );
}
