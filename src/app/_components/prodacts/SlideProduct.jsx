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
    autoplaySpeed: 1000,

    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container  bg-[#eeeeeeab] py-10">
      <Link href="products">
        <Slider {...settings}>
          <div>
            <img
              src="https://fakeimg.pl/350x200/?text=World&font=lobster"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://fakeimg.pl/350x200/?text=World&font=lobster"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://fakeimg.pl/350x200/?text=World&font=lobster"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://fakeimg.pl/350x200/?text=World&font=lobster"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://fakeimg.pl/350x200/?text=World&font=lobster"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://fakeimg.pl/350x200/?text=World&font=lobster"
              alt=""
            />
          </div>
        </Slider>
      </Link>
    </div>
  );
}
