import React, { useState } from "react";

const Faqs: React.FC = () => {
  const lorem =
    "Lorem ipsum dolor sit amet ctetur. Arcu risus nibh egtas tortor.Lorem ipsum dolor sit amet ctetur. Arcu risus nibh egtas tortor..";

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { question: "How do I book an appointment?", answer: lorem },
    { question: "Does it hurt?", answer: lorem },
    {
      question: "How old do I have to be to get a tattoo?",
      answer: lorem,
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="space-y-8 py-10 mt-20">
      <h1 className="text-neon-pink">FAQ</h1>
      <div>
        {faqs.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={idx}
              className="leading-snug urbanist-normal py-10 border-t border-t-black/10 dark:border-t-warm-white/30"
            >
              <div
                className="flex justify-between items-start cursor-pointer"
                onClick={() => toggleFAQ(idx)}
              >
                <h6 className="text-neon-pink">{item.question}</h6>
                {isActive ? (
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    className="size-7 dark:fill-warm-white"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.4299 47.494L36.7695 39.8337L29.1092 47.494C28.2666 48.3366 26.8877 48.3366 26.0451 47.494C25.2024 46.6514 25.2024 45.2725 26.0451 44.4299L33.7054 36.7696L26.0451 29.1092C25.2024 28.2666 25.2024 26.8877 26.0451 26.0451C26.8877 25.2025 28.2666 25.2025 29.1092 26.0451L36.7695 33.7054L44.4299 26.0451C45.2725 25.2025 46.6513 25.2025 47.494 26.0451C48.3366 26.8877 48.3366 28.2666 47.494 29.1092L39.8337 36.7696L47.494 44.4299C48.3366 45.2725 48.3366 46.6514 47.494 47.494C46.6513 48.3366 45.2725 48.3366 44.4299 47.494Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    className="size-7 dark:text-warm-white"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.9999 28.1667H28.1666V39C28.1666 40.1917 27.1916 41.1667 25.9999 41.1667C24.8083 41.1667 23.8333 40.1917 23.8333 39V28.1667H12.9999C11.8083 28.1667 10.8333 27.1917 10.8333 26C10.8333 24.8083 11.8083 23.8333 12.9999 23.8333H23.8333V13C23.8333 11.8083 24.8083 10.8333 25.9999 10.8333C27.1916 10.8333 28.1666 11.8083 28.1666 13V23.8333H38.9999C40.1916 23.8333 41.1666 24.8083 41.1666 26C41.1666 27.1917 40.1916 28.1667 38.9999 28.1667Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </div>
              {isActive && <p className="py-8 pl-20">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
