import React,{useRef,useEffect} from "react";
import hero from "./img/hero.jpg"
import { TweenMax } from "gsap";

const Main = () => {
const revealimg =useRef(null);
const revealtext =useRef(null);
const imgxxx =useRef(null);

  useEffect(() => {
      TweenMax.fromTo(
       revealimg.current,
       1,
        { x: "0%" },
        { x: "100%" ,ease:"Power2.easeIn"}
        

       );
       TweenMax.fromTo(
        revealtext.current,
        1,
         { x: "0%" },
         { x: "100%" ,ease:"Power2.easeIn"}
        );
        TweenMax.fromTo(
          imgxxx.current,
          1,
           { scale: "3" },
           { scale: "1" ,ease:"Power2.easeIn"}
          );

       
  });
  return (
    <div>
      <header className="navbar">
        <h1>
          <a href="" id="logo">
            Work.
          </a>
        </h1>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
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
              مرحبا بك في   <span className="mountain-span">WORK.</span>
            </h2>
            <div className="title-swipe t-swipe1"></div>
          </div>
          <p>
            نحن شركة متخصصة في صناعة مواقع الانترنت الحديثة ذات التصميم الغير تقليدي مع مراعاة سهولة التصفح والتفاعل من قبل المستخدمين وكذلك سهولة الاضافة والتعديل من المسئول  ويمكن التعرف علينا اكثر من هنا 
          </p>
          <a className="explore mountain-exp">Explore</a>
          <div ref={revealtext} className="reveal-text"></div>
        </div>
      </section>
      <nav className="nav-bar">
      <ul className="nav-links">
        <h3>تواصل معنا</h3>
        <h3>المشاريع</h3>
        <h3>عن الشركة</h3>
      </ul>
      <div className="contact">
        <h2>Stay in touch.</h2>
        <div className="social">
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
      </div>
    </nav>
      </main>
    </div>
  );
}
export default Main;
