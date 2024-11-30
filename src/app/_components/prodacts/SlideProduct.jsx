"use client"
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
        
export default function SlideProduct() {
        var settings = {
          dots: true,
          infinite: true,
          centerMode: true,
          centerPadding: "60px",
          className: "center",
          autoplay: true,
          speed: 500,
          autoplaySpeed: 3000,
          slidesToShow: 3,
          slidesToScroll: 3,
        };
  const imgArray = [
    'public/images/1.jpg',
    'public/images/2.jpg',
    'public/images/3.jpg',
    'public/images/4.jpg',
    'public/images/5.jpg',
    'public/images/6.jpg',
    'public/images/7.jpg',
    'public/images/8.jpg',
    'public/images/9.jpg',
    'public/images/10.jpg',
  ]
  return (
    <div className="slider-container  bg-[#eeeeeeab] overflow- py-10">
      <Link href="products">
        <Slider {...settings}>
          {imgArray.map((e,index) => (
            <div key={index}>
            <img
              src={e}
              alt="#"
            />
            </div>
          ))}

        </Slider>
      </Link>
    </div>
  );
}
