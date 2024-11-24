
'use client'
import Blogs from "../blogs/Blogs";
import CardBackg from "../cardBackg.jsx/Card";
import SlideProduct from "../prodacts/SlideProduct";

export default function Home() {
  return (
    <>
      <div className=" p-10">
        <h1 className="text-center font-bold text-6xl text-min mb-10">
          الباقــات
        </h1>
        <div className="flex gap-8  justify-center flex-wrap">
          <CardBackg
            title="الباقة الاساسيه"
            data="A1"
            des={["Mohamed", "count", "class", "cotsh"]}
          />
          <CardBackg
            title="الباقة الجولد "
            data="A2"
            des={["Mohamed", "count", "class", "cotsh"]}
          />
          <CardBackg
            title="الباقة البرو"
            data="A3"
            des={["Mohamed", "count", "class", "cotsh"]}
          />
        </div>
      </div>
      <div>
        <SlideProduct />
      </div>
      <div className=" w-11/12 my-5 mx-auto shadow-xl">
        <Blogs />
      </div>
    </>
  );
}
