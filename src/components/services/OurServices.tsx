import React from "react";
import ServiceCard from "./ServiceCard";

function OurServices() {
  const lorem =
    "Lorem ipsum dolor sit amet ctetur. Arcu risus nibh egtas tortor.";
  const services = [
    {
      title: "WEBSITE DESIGN",
      content: lorem,
      action_txt: "About  |Web Design",
    },
    {
      title: "DIGITAL",
      content: lorem,
      action_txt: "About  |Digital",
    },
    {
      title: "BRANDING",
      content: lorem,
      action_txt: "About | Branding",
    },
  ];
  return (
    <section className="gap-20 hidden lg:flex items-center h-[62rem] mt-20 border-t border-t-neon-pink">
      <div className="space-y-20 flex flex-col h-full justify-between">
        <h1 className="relative w-max mt-10 text-neon-pink leading-snug">
          OUR{" "}
          <span className="absolute right-0">
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              className="dark:text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_365_1027)">
                <path
                  d="M69.4817 41.6891C68.0087 43.1621 67.2643 46.8169 66.8911 50.1361C66.4027 54.4122 66.5873 58.7539 67.5958 62.9347C68.3522 66.0693 69.5691 69.5692 71.4669 71.467M71.4669 71.467C69.5691 69.5692 66.0672 68.3503 62.9346 67.5959C58.7518 66.5894 54.4101 66.4048 50.138 66.8892C46.8168 67.2644 43.1581 68.0128 41.689 69.4818M71.4669 71.467L23.8223 23.8224"
                  stroke="currentColor"
                  stroke-width="3"
                />
              </g>
              <defs>
                <clipPath id="clip0_365_1027">
                  <rect
                    width="67.3797"
                    height="67.3797"
                    fill="currentColor"
                    transform="translate(95.2893 47.6447) rotate(135)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>{" "}
          <br />
          SERVICES
        </h1>

        <div className="text-white gap-16 flex">
          <div className="flex flex-col justify-end">
            <ServiceCard item={services[1]} />
          </div>
          <div className="flex flex-col gap-16">
            <ServiceCard item={services[0]} />
            <ServiceCard item={services[2]} />
          </div>
        </div>
      </div>

      <div className="w-[50rem] h-full relative object-cover">
        <img
          src="./images/serviceimg5.jpeg"
          className="absolute h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default OurServices;
