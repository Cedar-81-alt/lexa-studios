import { motion } from "framer-motion";
import { useState } from "react";



const ContactSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white p-8 ">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div
          className="md:w-1/2 text-[#B743C6] text-left"
          
        >
          <h2 className="heading-2 mb-5 font-semibold leading-tight">
            WANT TO <span className="text-5xl font-light italic">create</span>
          </h2>

          <h2
            className="text-3xl md:text-5xl text-center  md:font- font-bold leading-tight"
           
          >
            SOMETHING <span className="text-3xl md:text-5xl font-light italic">amazing</span>
          </h2>

          <h2 className="text-3xl mt-5 md:text-5xl font-semibold leading-tight">
            FOR <span className="text-5xl font-light italic">your brand?</span>
          </h2>

          <button className="mt-36 bg-[#B066B6] text-white px-6 py-3 rounded-sm">
            Book a call
          </button>
        </div>

        <div
          className="md:w-1/2 flex justify-end mt-6 md:mt-0"
         
        >
          <img
            src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1741222123/image_14_d3dfhz.png"
            alt="Shirts Collection"
            className="w-full border rounded-lg"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-[#212121] my-8"></div>

      {/* Second Section */}
      <div
        className="flex flex-col md:flex-row items-start justify-between"
        
      >
        <div className="md:w-1/2 text-[#B066B6] text-left">
          <h3 className="text-2xl font-bold">Send us a message here</h3>
          <p className="text-black dark:text-white mt-2">
            Someone from our team would contact you within 24 hours.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
        
  <form className="space-y-4">
    <div>
      <label className="block text-black dark:text-white mb-1">Name</label>
      <input
        type="text"
        className="w-full border-b-2 text-black border-black p-3 bg-transparent outline-none"
      />
    </div>

    <div>
      <label className="block text-black dark:text-white mb-1">Email Address</label>
      <input
        type="email"
        className="w-full border-b-2 text-black border-black p-3 bg-transparent outline-none"
      />
    </div>

    <div>
      <label className="block text-black dark:text-white mb-1">Type your message here</label>
      <textarea
        className="w-full border-b-2 border-black p-5 bg-transparent outline-none text-black"
      />
    </div>
            <button className="mt-4 bg-[#B066B6] text-white px-6 py-2 rounded-sm">
              Send a message
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-[#EA00FF] my-8"></div>

      {/* FAQ Section */}
      <div
        className="flex flex-col md:flex-row items-start justify-between"
        
      >
        <div className="md:w-1/2 text-[#B066B6] text-left">
          <h3 className="text-2xl font-bold">FAQs</h3>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 space-y-4">
          {[
            {
              question: "How long does a project take?",
              answer:
                "The duration of each project depends on its complexity and it ranges from a week to two months.",
            },
            {
              question: "Are your rates fixed?",
              answer: "Our rates vary depending on the project scope. Contact us for a custom quote.",
            },
            {
              question: "Do you offer revisions?",
              answer: "Yes, we offer revisions to ensure the final product meets your expectations.",
            },
          ].map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-3 00 pb-4">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-lg">{faq.question}</h4>
                <button
                  className="text-[#B066B6] text-lg font-bold"
                  onClick={() => toggleFaq(index)}
                >
                  {openFaq === index ? "-" : "+"}
                </button>
              </div>
              {openFaq === index && <p className="text-black mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
     
    </section>
  );
};

export default ContactSection;
