import React, { useRef, useEffect, useState } from "react";
import hero from "./img/hero.jpg";
import { TweenMax } from "gsap";
import { css, keyframes } from "@emotion/core";
import { motion } from "framer-motion";
const Main = () => {
  const revealimg = useRef(null);
  const revealtext = useRef(null);
  const imgxxx = useRef(null);
  const burger = useRef(null);
  const navbar = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const logo = useRef(null);
  const variandivlink = {
  
  };
  const variantlink = {
    hidden: {
      scale: 1,
      
    },
    visible: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(241, 240, 234)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      background:"black",
      color:"white",
      transition: {
        duration: 0.4,
        yoyo: Infinity
      }
     
    },
  };
  const [active, setactive] = useState(false);
  useEffect(() => {
    TweenMax.fromTo(
      revealimg.current,
      1,
      { x: "0%" },
      { x: "100%", ease: "Power2.easeIn" }
    );
    TweenMax.fromTo(
      revealtext.current,
      1,
      { x: "0%" },
      { x: "100%", ease: "Power2.easeIn" }
    );
    TweenMax.fromTo(
      imgxxx.current,
      2,
      { scale: "3" },
      { scale: "1", ease: "Power2.easeOut" }
    );
    TweenMax.fromTo(
      burger.current,
      3,
      { y: "-100%" },
      { y: "0%", ease: "Power2.easeOut" }
    );
  });
  const menubar = () => {
    setactive(!active);
    if (!active) {
      TweenMax.to(
        navbar.current,
        0.25,

        { clipPath: "circle(2500px at 100% -10%)", ease: "Power2.easeIn" }
      );
      TweenMax.to(
        line1.current,
        0.25,

        { rotate: "45", y: 5, background: "black", ease: "Power2.easeIn" }
      );
      TweenMax.to(
        line2.current,
        0.25,

        { rotate: "-45", y: -5, background: "black", ease: "Power2.easeIn" }
      );
      TweenMax.to(
        logo.current,
        0.25,

        { color: "black", ease: "Power2.easeIn" }
      );
    } else {
      TweenMax.to(
        line2.current,
        -0.25,

        { y: 0, rotate: "0", background: "white", ease: "Power2.easeOut" }
      );
      TweenMax.to(
        logo.current,
        0.25,

        { color: "white", ease: "Power2.easeIn" }
      );
      TweenMax.to(
        navbar.current,
        0.25,

        { clipPath: "circle(50px at 100% -10%)", ease: "Power2.easeIn" }
      );
      TweenMax.to(
        line1.current,
        -0.25,

        { y: 0, rotate: "0", background: "white", ease: "Power2.easeOut" }
      );
    }
  };

  return (
    <div>
      <header ref={burger} className="navbar">
        <h1>
          <a ref={logo} href="" id="logo">
            Work.
          </a>
        </h1>
        <div className="burger" onClick={menubar}>
          <div ref={line1} className="line1"></div>
          <div ref={line2} className="line2"></div>
        </div>
      </header>
      <main>
        <section className="firstslide slide">
          <div className="hero-img">
            <img ref={imgxxx} src={hero} alt="forest image" />
            <div ref={revealimg} className="reveal-img"></div>
          </div>
          <div className="hero-desc">
            <div className="title">
              <h2>
                مرحبا بك في <span className="fashion-span">WORK.</span>
              </h2>
            </div>
            <p>
              نحن شركة متخصصة في صناعة مواقع الانترنت الحديثة ذات التصميم الغير
              تقليدي مع مراعاة سهولة التصفح والتفاعل من قبل المستخدمين وكذلك
              سهولة الاضافة والتعديل من المسئول ويمكن التعرف علينا اكثر من هنا
            </p>
            <a className="explore mountain-exp">Explore</a>
            <div ref={revealtext} className="reveal-text"></div>
          </div>
        </section>
        <motion.nav ref={navbar} className="nav-bar">
          <motion.div
           
            className="nav-links"
          >
            <motion.a variants={variantlink}  initial="hidden"
             whileHover="visible"
            href="#">
              تواصل معنا
           </motion.a>
            <motion.a variants={variantlink} initial="hidden"
             whileHover="visible" href="#">
              المشاريع
            </motion.a>
            <motion.a variants={variantlink} initial="hidden"
             whileHover="visible" href="#">
              عن الشركة
            </motion.a>
          </motion.div>

          <div className="contact">


            <h1>Stay in touch.</h1>
            <h1>
              {" "}
              <i className="fab fa-facebook"></i>
            </h1>
            <h1>
              {" "}
              <i className="fab fa-whatsapp-square"></i>
            </h1>
            <h1>
              {" "}
              <i className="fab fa-twitter"></i>
            </h1>
          </div>
        </motion.nav>
      </main>
    </div>
  );
};
export default Main;
