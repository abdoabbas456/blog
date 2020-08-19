import React, { useState } from "react";
import { motion } from "framer-motion";
import { css, keyframes } from "@emotion/core";
import hero from "./img/hero.jpg";
const Benfits = () => {
  return (
    <div>
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

        <div
          className="projectslide"
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap:wrap;
            width: 80%;
            height: 89vh;
            margin: auto;
            padding: 2rem 0rem;
          `}
        >
          <div
            css={css`
              display: flex;
              background: white;
              position: relative;
              flex:1 1 20rem;
              margin: 2rem;
              border-top-left-radius: 3rem;
            `}
            className="card1 one"
          >
            <img
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-top-left-radius: 3rem;
                position: relative;
              `}
              src={hero}
            />
            <div
              css={css`
                position: absolute;
                bottom: 8px;
                left: 16px;
              `}
              className="bottom-left"
            >
              Bottom Left
            </div>
          </div>
          <div
            css={css`
              display: flex;
              background: white;

              flex:1 1 20rem;

              margin: 2rem;
              border-top-left-radius: 3rem;
            `}
            className="card1 two"
          >
            k
          </div>
          <div
            css={css`
              display: flex;
              background: white;

              flex:1 1 20rem;

              margin: 2rem;
              border-top-left-radius: 3rem;
            `}
            className="card1 three"
          >
            k
          </div>
        </div>

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
      </div>
    </div>
  );
};
export default Benfits;
