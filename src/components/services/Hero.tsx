import React from "react";
import CreativeCard from "./CreativeCard";

function Hero() {
  let lorem =
    "Lorem ipsum dolor sit amet ctetur. Arcu risus nibh egtas tortor.Lorem ipsum dolor sit amet ctetur. Arcu risus nibh egtas tortor.Lorem ipsum dolor sit amet ctetur. Arcu risus nibh egtas tortor.Lorem ipsum dolor sit amet ctetur. Arcu risus nibh egtas tortor.";
  const creatives = [
    {
      img: "./images/serviceimg1.png",
      title: "Olayinka D. Adeyefa",
      content: lorem,
      service: "Specializes in Calligraphy and fine line.",
    },
    {
      img: "./images/serviceimg2.png",
      title: "Adedokun Adewale",
      content: lorem,
      service: "Specializes in realism and fine line.",
    },
    {
      img: "./images/serviceimg3.png",
      title: "Akintode Ayobami",
      content: lorem,
      service: "Specializes in Illustrative color.",
    },
    {
      img: "./images/serviceimg4.jpeg",
      title: "HECTOR",
      content: lorem,
      service: "Specializes in Calligraphy and fine line.",
    },
  ];
  return (
    <section className="space-y-10 mt-10">
      <h1 className="text-neon-pink">OUR CREATIVE FORCE</h1>
      <div className="overflow-x-auto flex gap-8">
        {creatives.map((item, idx) => (
          <CreativeCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Hero;
