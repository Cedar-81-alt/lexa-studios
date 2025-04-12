import clsx from "clsx";

function FeaturedWork() {
  return (
    <div className="lg:flex mb-24 mt-24 space-y-10 lg:space-y-0">
      <h3 className="text-neon-pink w-[40%] lg:border-r border-r-neon-pink">
        FEATURED WORK
      </h3>

      <div className="flex-1 lg:pl-5 space-y-10 lg:w-[60%]">
        <div>
          <div className="h-[30rem] w-full relative object-center overflow-clip rounded-xl">
            <img
              src="./images/homeimg2.jpeg"
              alt=""
              className="absolute w-full h-full object-center"
            />
            <div className="flex gap-4 absolute bottom-3 right-3 z-20">
              {["WEB DESIGN", "BRANDING", "DIGITAL"].map((category, idx) => (
                <button
                  key={idx}
                  className={clsx(
                    "px-4 py-1 rounded-md cursor-pointer w-max bg-warm-white text-black transition"
                  )}
                >
                  <p>{category}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-end pt-4">
            <div className="flex w-max gap-3 items-center relative right-0">
              <h6>OCEAN</h6>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="dark:text-white h-4 lg:h-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_205_267)">
                  <path
                    d="M5 16H27"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 7L27 16L18 25"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_205_267">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h6>BRAND IDENTITY AND WEBSITE</h6>
            </div>
          </div>
        </div>
        <ul className="border border-neon-pink/50" />
        <div>
          <div className="h-[30rem] w-full relative bg-brown object-center overflow-clip rounded-xl">
            <img
              src="./images/homeimg3.png"
              alt=""
              className="absolute w-full h-full object-center"
            />
            <div className="bg-brown/90 h-full w-full absolute top-0 left-0 z-10" />
            <h2 className="top-[50%] -translate-y-[50%] absolute quintessential-regular left-[50%] z-20 text-[#DE9420] -translate-x-[50%]">
              ROYAL <br />
              GANG
            </h2>
            <div className="flex gap-4 absolute bottom-3 left-3 z-20">
              {["WEB DESIGN", "BRANDING", "DIGITAL"].map((category, idx) => (
                <button
                  key={idx}
                  className={clsx(
                    "px-4 py-1 rounded-md cursor-pointer w-max bg-warm-white text-black transition"
                  )}
                >
                  <p>{category}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-end pt-4">
            <div className="flex w-max gap-3 items-center relative right-0">
              <h6>OCEAN</h6>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="dark:text-white h-4 lg:h-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_205_267)">
                  <path
                    d="M5 16H27"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 7L27 16L18 25"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_205_267">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h6>BRAND IDENTITY AND WEBSITE</h6>
            </div>
          </div>
        </div>
        <ul className="border border-neon-pink/50" />
        <div className="lg:flex gap-10 space-y-10 lg:space-y-0">
          <div className="lg:w-[48%]">
            <div className="relative h-[30rem] bg-black rounded-xl overflow-clip">
              <div className="flex flex-col gap-2 absolute bottom-5 left-5 z-20">
                {["WEB DESIGN", "BRANDING", "DIGITAL"].map((category, idx) => (
                  <button
                    key={idx}
                    className={clsx(
                      "px-4 py-1 rounded-md cursor-pointer w-max bg-warm-white text-black transition"
                    )}
                  >
                    <p>{category}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <div className="flex flex-wrap w-max gap-3 items-center relative right-0">
                <h6>OCEAN</h6>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="dark:text-white h-4 lg:h-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_205_267)">
                    <path
                      d="M5 16H27"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18 7L27 16L18 25"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_205_267">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h6>BRAND IDENTITY AND WEBSITE</h6>
              </div>
            </div>
          </div>

          <div className="lg:w-[48%]">
            <div className="relative h-[30rem] bg-black rounded-xl overflow-clip">
              <div className="flex flex-col gap-2 absolute bottom-5 left-5 z-20">
                {["WEB DESIGN", "BRANDING", "DIGITAL"].map((category, idx) => (
                  <button
                    key={idx}
                    className={clsx(
                      "px-4 py-1 rounded-md cursor-pointer w-max bg-warm-white text-black transition"
                    )}
                  >
                    <p>{category}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <div className="flex flex-wrap w-max gap-3 items-center relative right-0">
                <h6>OCEAN</h6>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="dark:text-white h-4 lg:h-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_205_267)">
                    <path
                      d="M5 16H27"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18 7L27 16L18 25"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_205_267">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h6>BRAND IDENTITY AND WEBSITE</h6>
              </div>
            </div>
          </div>
        </div>
        <ul className="border border-neon-pink/50" />
        <div className="lg:flex gap-10 space-y-10 lg:space-y-0">
          <div className="lg:w-[48%]">
            <div className="relative h-[30rem] bg-black rounded-xl overflow-clip">
              <div className="flex flex-col gap-2 absolute bottom-5 left-5 z-20">
                {["WEB DESIGN", "BRANDING", "DIGITAL"].map((category, idx) => (
                  <button
                    key={idx}
                    className={clsx(
                      "px-4 py-1 rounded-md cursor-pointer w-max bg-warm-white text-black transition"
                    )}
                  >
                    <p>{category}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <div className="flex flex-wrap w-max gap-3 items-center relative right-0">
                <h6>OCEAN</h6>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="dark:text-white h-4 lg:h-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_205_267)">
                    <path
                      d="M5 16H27"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18 7L27 16L18 25"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_205_267">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h6>BRAND IDENTITY AND WEBSITE</h6>
              </div>
            </div>
          </div>
          <div className="lg:w-[48%]">
            <div className="relative h-[30rem] bg-black rounded-xl overflow-clip">
              <div className="flex flex-col gap-2 absolute bottom-5 left-5 z-20">
                {["WEB DESIGN", "BRANDING", "DIGITAL"].map((category, idx) => (
                  <button
                    key={idx}
                    className={clsx(
                      "px-4 py-1 rounded-md cursor-pointer w-max bg-warm-white text-black transition"
                    )}
                  >
                    <p>{category}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <div className="flex flex-wrap w-max gap-3 items-center relative right-0">
                <h6>OCEAN</h6>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="dark:text-white h-4 lg:h-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_205_267)">
                    <path
                      d="M5 16H27"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18 7L27 16L18 25"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_205_267">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h6>BRAND IDENTITY AND WEBSITE</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedWork;
