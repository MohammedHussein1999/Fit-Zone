// 'use client'

import CardBackg from "../cardBackg.jsx/Card";

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
    </div>
  );
}
