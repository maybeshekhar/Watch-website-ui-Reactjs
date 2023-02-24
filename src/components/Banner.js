import React from "react";

export const Banner = () => {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="content">
            <p>NEW TREND 2023</p>
            <h3>Watches Collection</h3>
            <button className="btn">Shop Now</button>
          </div>
          <div className="img-container">
            <img src="/images/banner3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};