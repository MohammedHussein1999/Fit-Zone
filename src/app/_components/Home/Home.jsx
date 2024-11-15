"use client";

import Blogs from "../blogs/Blogs";
import CardBackg from "../cardBackg.jsx/Card";
import SlideProduct from "../prodacts/SlideProduct";

export default function Home() {
  return (
    <div>
      <div className="cards-contaner">
        <CardBackg
          title="Tatle1"
          data="A1"
          des="Mohamed , count , class , cotsh"
        />
        <CardBackg
          title="Tatle2"
          data="A2"
          des="Mohamed , count , class , cotsh"
        />
        <CardBackg
          title="Tatle3"
          data="A3"
          des="Mohamed , count , class , cotsh"
        />
      </div>
      <div>
        <SlideProduct />
      </div>
      <div className=" w-11/12 my-5 mx-auto shadow-xl">
        <Blogs />
      </div>
    </div>
  );
}
