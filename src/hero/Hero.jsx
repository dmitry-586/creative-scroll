import React from "react";

export default function Hero() {
  return (
    <>
      <header className="hero">
        <img
          data-speed="0.75"
          src="public/img/hero.png"
          alt=""
          className="hero_img"
        />
        <div className="hero_container">
          <div data-speed=".65" className="hero_header">
            <h1 className="hero_title">creative scroll</h1>
          </div>
        </div>
      </header>
    </>
  );
}
