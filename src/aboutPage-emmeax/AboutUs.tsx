const LexaDesignPage = () => {
  return (
    <div className="min-h-screen urbanist-regular text-black dark:text-white py-8">
      {/* Hero Section */}
      <h1 className="lg text-nowrap font-medium text-[#B743C6]">
        LEXA DESIGN STUDIO
      </h1>

      {/* Content Section */}
      <div className="md:mt-20 mt-14 grid md:grid-cols-2 gap-8">
        {/* Left Text Content */}
        <div className="">
          <h3 className="lg font-medium text-[#B743C6] mb-6 md:mb-4">
            UNLEASHING YOUR <br /> BRAND'S POTENTIAL
          </h3>
          <p className=" mb-4 w-[80%] leading-snug">
            With the creatives of the Future and the Prescence of mind to
            Process what works now, Our team is the best bet in a gamble for
            Excellence
          </p>
        </div>

        {/* Right Image */}
        <img
          src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1741545979/Frame_427318292_ctmc01.png"
          alt="Branding"
          className="rounded-md shadow-lg w-full"
        />
      </div>

      {/* Button Tabs Section */}
      <div className="mt-14 flex flex-wrap gap-4">
        {[
          "Branding",
          "Product Design",
          "Website Design",
          "Graphic Design",
          "Illustration",
          "Motion & 3D",
        ].map((item, index) => (
          <button
            key={index}
            className="border px-4 py-2 rounded-md hover:bg-[#B743C6] hover:text-white"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Branding Section */}
      <div className="mt-10 grid md:grid-cols-2 gap-8 border-t pt-8">
        {/* Left Column */}
        <div>
          <h3 className="text-[#B743C6] mb-4">BRANDING</h3>
          <ul className="space-y-4">
            <li>
              <h6 className="alt text-warm-white">Logo</h6>
            </li>
            <li>
              <h6 className="alt text-warm-white">Company Identity</h6>
            </li>
            <li>
              <h6 className="alt text-warm-white">Brand Guide</h6>
            </li>
          </ul>
          <button className="bg-[#B743C6] text-white px-4 py-2 mt-4 rounded-md ">
            Get in touch
          </button>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-[#B743C6] leading-snug mb-4">
            A strong brand is a tool to connect people with your brand all
            around the world.
          </h3>
          <div className="flex gap-4">
            <h5 className="text-warm-white leading-snug alt mb-4">
              Lorem ipsum dolor sit amet consectetur. Arcu risus nibh egestas
              tortor.
            </h5>
            <h5 className="text-warm-white leading-snug alt mb-4">
              Lorem ipsum dolor sit amet consectetur. Arcu risus nibh egestas
              tortor.
            </h5>
          </div>
          <div className="bg-gray-300 h-60 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default LexaDesignPage;
