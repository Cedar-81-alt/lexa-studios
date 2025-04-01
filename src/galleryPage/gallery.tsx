import React from "react";

function Gallery() {
  const gallery = [
    {
      title: "2 Bohemian Collection",
      caption:
        "Terra is a cozy and sophisticated collection that celebrates the warmth and comfort of the earth. It showcases rich textures and earthy tones.",
      img: "./images/galleryimg1.png",
      active: false,
    },
    {
      title: "2 Bohemian Collection",
      caption:
        "Terra is a cozy and sophisticated collection that celebrates the warmth and comfort of the earth. It showcases rich textures and earthy tones.",
      img: "./images/galleryimg2.png",
      active: true,
    },
    {
      title: "2 Bohemian Collection",
      caption:
        "Terra is a cozy and sophisticated collection that celebrates the warmth and comfort of the earth. It showcases rich textures and earthy tones.",
      img: "./images/galleryimg3.png",
      active: false,
    },
  ];
  const activeItem = gallery.find((item) => item.active);
  return (
    <main className="flex gap-10  mt-20">
      <div className="flex-1 space-y-6">
        <h5>{activeItem?.title}</h5>
        <div className="w-full h-[30rem] relative overflow-clip object-center">
          <img
            src={activeItem?.img}
            className="h-full w-full absolute object-center"
            alt={activeItem?.title}
          />
        </div>
      </div>

      <div className="space-y-10">
        {gallery.map((item, idx) => (
          <div className="size-[20rem] relative overflow-clip object-center">
            <img
              key={idx}
              src={item.img}
              className="h-full w-full absolute object-center"
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Gallery;
