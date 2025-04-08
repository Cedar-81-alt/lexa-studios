import React from "react";

interface Params {
  item: {
    title: string;
    img: string;
    service: string;
    content: string;
  };
}

function CreativeCard({ item }: Params) {
  return (
    <div className="space-y-6 text-royal-purple dark:text-warm-white">
      <div className="h-[30rem] lg:h-[20rem] lg:w-[18rem] object-cover relative rounded-md overflow-clip">
        <img src={item.img} className="w-full h-full object-cover absolute" />
      </div>
      <div className="space-y-6 urbanist-light">
        <h4 className="quintessential-regular">{item.title}</h4>
        <p className="leading-snug">{item.service}</p>
        <p className="leading-snug">{item.content}</p>
      </div>
    </div>
  );
}

export default CreativeCard;
