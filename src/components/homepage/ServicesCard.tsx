import React, { JSX } from "react";

interface Params {
  svg: JSX.Element;
  title: string;
  content: string;
}

function ServicesCard({ svg, title, content }: Params) {
  return (
    <div className="flex gap-6">
      {svg}
      <div className="space-y-2">
        <h5>{title}</h5>
        <p className="urbanist-light leading-snug">{content}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
