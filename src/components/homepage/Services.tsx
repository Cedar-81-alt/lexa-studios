import React from "react";
import ServicesCard from "./ServicesCard";
import BrandingSvg from "../svgs/homepage/brandingSvg";
import ProductDesignSvg from "../svgs/homepage/productDesignSvg";
import WebsiteDesingSvg from "../svgs/homepage/websiteDesingSvg";
import GraphicDesign from "../svgs/homepage/graphicDesign";
import IllustrationSvg from "../svgs/homepage/illustrationSvg";
import Motion3dSvg from "../svgs/homepage/motion3dSvg";

function Services() {
  let lorem = `
    Lorem ipsum dolor sit amet consectetur. Arcu risus nibh egestas tortor scelerisque aliquet. Vel convallis ullamcorper eget risus metus in vitae.
    `;
  let items = [
    { svg: <BrandingSvg />, title: "BRANDING", content: lorem },
    { svg: <ProductDesignSvg />, title: "PRODUCT DESIGN", content: lorem },
    { svg: <WebsiteDesingSvg />, title: "WEBSITE DESIGN", content: lorem },
    { svg: <GraphicDesign />, title: "GRAPHIC DESIGN", content: lorem },
    { svg: <IllustrationSvg />, title: "ILLUSTRATION", content: lorem },
    { svg: <Motion3dSvg />, title: "MOTION & 3D", content: lorem },
  ];
  return (
    <section className="space-y-20">
      <div className="grid grid-cols-3 !gap-x-10 border-t border-t-neon-pink mt-26 pt-10">
        {items.splice(0, 3).map((item) => (
          <ServicesCard
            svg={item.svg}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 !gap-x-10 border-t border-t-neon-pink pt-10">
        {items.map((item) => (
          <ServicesCard
            svg={item.svg}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
