import React from "react";
import { css, keyframes } from "@emotion/core";
const Home = () => {
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
            <h1>...مرحبا</h1>
          </div>
        </div>
        <div className="col col-3">
          <div className="col3-1">
            <h1>ما الذي تبحث عنه ؟</h1>
          </div>
          <div>
            <ul>
              <li>صناعة موقع ذو مظهر حديث وغير تقليدي</li>
              <li>سهولة التصفح والتفاعل من المستخدمين وسرعة التحميل </li>
              <li>العمل على جميع الشاشات والاصدارات</li>
              <li>سهولة الاضافة والتعديل من المسئول </li>
              <li>استخدام احداث التقنيات والتحديث والصيانة المستمرة </li>
            </ul>
          </div>
          <div>
            <button>تواصل معنا</button>
          </div>
        </div>
        <div className="col col-4"></div>
      </div>
      <div className="page"></div>
    </div>
  );
};
export default Home;
