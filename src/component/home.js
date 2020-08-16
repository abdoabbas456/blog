import React, { useRef,useEffect } from "react";
import { TweenMax } from "gsap";

const Home = () => {
  const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);
  const page = useRef(null);
  // useEffect(() => {
  //   TweenMax.fromTo(
  //     [blue.current, yellow.current],
  //     0.5,
  //     { y: 18 },
  //     { y: -18, yoyo: true, repeat: -1 }
  //   );
  //   TweenMax.fromTo(
  //     [red.current, green.current],
  //     0.5,
  //     { y: -18 },
  //     { y: 18, repeat: -1, yoyo: true }
  //   );
  //   TweenMax.fromTo(
  //     [page.current],
  //     1,
  //     { x: "100%", opacity:1 ,scale:1},
  //     { x: "-100%" , opacity:0,scale:0}
  //   );

// }, []);

  return (
    <div>
      <div className="pageview">
        <div className="col col-1">
          <div className="col1-1">
            <h1>التواصل</h1>
            <h1>المشاريع</h1>
            <h1>عن </h1>
          </div>
          <div className="col1-2">
            <div className="line1"></div>
          </div>
        </div>
        <div className="col col-2">
          <div className="col2-1">
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="line4"></div>
          </div>
          <div className="col2-2">
            <p>M</p>
            <p>E</p>
            <p>N</p>
            <p>U</p>
          </div>
          <div className="col2-3">
            <h1>مرحبا </h1>
          </div>
          <div className="col2-4">
            <svg viewBox="0 0 150 33.2" width="60" height="150">
              <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#527abd" />
              <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#de4431" />
              <circle
                ref={yellow}
                cx="94.3"
                cy="16.6"
                r="16.1"
                fill="#f4b61a"
              />
              <circle
                ref={green}
                cx="133.4"
                cy="16.6"
                r="16.1"
                fill="#009e52"
              />
            </svg>
          </div>
        </div>
        <div className="col col-3">
          <div className="col3-1">
            <h1>ما الذي تبحث عنه ؟</h1>
          </div>
          <div className="col3-2">
            <ul>
              <li>صناعة موقع ذو مظهر حديث وغير تقليدي </li>
              <li>سهولة التصفح والتفاعل من المستخدمين وسرعة التحميل </li>
              <li>العمل على جميع الشاشات والاصدارات</li>
              <li>سهولة الاضافة والتعديل من المسئول </li>
              <li>استخدام احداث التقنيات والتحديث والصيانة المستمرة </li>
            </ul>
          </div>
          <div className="butcont">
            <button>تواصل معنا</button>
          </div>
        </div>
        <div className="col col-4">
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
      {/* <div className="page" ref={page}>
        <h1>welocme</h1>
      </div> */}
    </div>
  );
};
export default Home;
