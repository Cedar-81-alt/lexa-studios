import clsx from "clsx";
import React from "react";

interface HeroProps {
  setSelectedTag: (tag: string) => void;
  selectedTag: string;
}

const Hero: React.FC<HeroProps> = ({ setSelectedTag, selectedTag }) => {
  const categories: string[] = [
    "All",
    "Web Design",
    "Product Design",
    "Fashion",
    "3D Fashion",
    "Website Design",
  ];

  return (
    <section className="urbanist-regular space-y-5 py-8 ">
      <div className="w-[50%] space-y-2">
        <h1 className="urbanist-medium dark:text-neon-pink">OUR CREATIONS</h1>
        <h5 className="alt leading-snug">
          At Lexxa, we are passionate about creating stunning, one-of-a-kind
          fashion pieces that make you feel confident and beautiful. Here is a
          glimpse into our latest creation.
        </h5>
      </div>
      <div className="flex gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedTag(category);
            }}
            className={clsx(
              "px-6 py-2 rounded-lg cursor-pointer border border-gray-50/20 bg-transparent hover:bg-neon-pink transition",
              category === selectedTag
                ? "bg-neon-pink text-white"
                : "text-white"
            )}
          >
            <p>{category}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
