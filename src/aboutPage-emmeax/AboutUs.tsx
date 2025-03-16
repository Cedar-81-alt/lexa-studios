import { motion } from "framer-motion";

const LexaDesignPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8">
      {/* Hero Section */}
      <header
        className="text-center text-4xl md:text-9xl font-medium text-[#B743C6]"
       
      >
        LEXA DESIGN STUD
      </header>

      {/* Content Section */}
      <div
        className="md:mt-20 mt-14 grid md:grid-cols-2 gap-8"
        
      >
        {/* Left Text Content */}
        <div>
          <h2 className="md:text-5xl text-3xl font-medium text-[#B743C6] mb-6 md:mb-4">
            UNLEASHING YOUR <br /> BRAND'S POTENTIAL
          </h2>
          <p className=" mb-4">
            Lorem ipsum dolor sit amet consectetur. Arcu risus nibh egestas <br />
            tortor. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Nemo voluptas omnis optio illo porro, iusto maxime eius, <br />
            repellendus distinctio sunt consectetur, perspiciatis ad natus id <br />
            minima explicabo ratione sit iste.
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
      <div
        className="mt-14 flex flex-wrap gap-4"
        
      >
        {["Branding", "Product Design", "Website Design", "Graphic Design", "Illustration", "Motion & 3D"].map((item, index) => (
          <button
            key={index}
            className="border px-4 py-2 rounded-md hover:bg-[#B743C6] hover:text-white"
           
          >
            {item}
          </button>
        ))}
      </div>

      {/* Branding Section */}
      <div
        className="mt-10 grid md:grid-cols-2 gap-8 border-t pt-8"
       
      >
        {/* Left Column */}
        <div>
          <h3 className="text-[#B743C6] font-semibold mb-4">BRANDING</h3>
          <ul className="space-y-2">
            <li>Logo</li>
            <li>Company Identity</li>
            <li>Brand Guide</li>
          </ul>
          <button
            className="mt-10 bg-[#B743C6] text-white px-4 py-2 mt-4 rounded-md "
            
          >
            Get in touch
          </button>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-[#B743C6] text-3xl font-semibold mb-4">
            A strong brand is a tool to connect people with your brand all around the world.
          </h3>
          <div className="flex gap-4">
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur. Arcu risus nibh egestas tortor.
            </p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur. Arcu risus nibh egestas tortor.
            </p>
          </div>
          <div
            className="bg-gray-300 h-60 rounded-md"
           
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LexaDesignPage;