import clsx from "clsx";
import React from "react";

interface WorkItem {
  title: string;
  content: string;
  tags: string[];
  img: string;
}

interface WorksContentProps {
  selectedTag: string;
}

const WorksContent: React.FC<WorksContentProps> = ({ selectedTag }) => {
  const works: WorkItem[] = [
    {
      title: "The Vault",
      content:
        "Curating exclusive access to the latest RELEASE FROM TOP BRANDS AND EVENTS WHILE CONNECTING ENTHUSIASTS WITH SOUGHT-AFTER COLLECTIBLES AND MOMENTS.",
      tags: ["Web Design", "Product Design"],
      img: "./images/worksimg1.png",
    },
    {
      title: "Royal Gang",
      content:
        "Explore our work, where creativity seamlessly meets purpose, pushing boundaries and transforming ideas into impactful experiences.",
      tags: ["Fashion", "Product Design"],
      img: "./images/worksimg2.png",
    },
    {
      title: "Ocean",
      content: "Terra is a cozy and sophisticated collection.",
      tags: ["3D Fashion", "Product Design"],
      img: "./images/worksimg3.png",
    },
    {
      title: "4K Studios",
      content: "Terra is a cozy and sophisticated collection.",
      tags: ["Product Design", "Website Design"],
      img: "./images/worksimg7.png",
    },
  ];

  // **Filter works based on selected tag**
  const filteredWorks =
    selectedTag === "All"
      ? works
      : works.filter((work) => work.tags.includes(selectedTag));

  return (
    <section className="space-y-10 overflow-y-auto">
      {filteredWorks.length === 0 ? (
        <p className="text-gray-500">No works found for "{selectedTag}"</p>
      ) : (
        filteredWorks.map((work, idx) => (
          <div
            className="flex flex-col lg:flex-row gap-10 border-t justify-between border-t-gray-50/20 pt-10"
            key={idx}
          >
            <div className="urbanist-regular space-y-4">
              <h5 className="quintessential-regular text-neon-pink">
                {work.title}
              </h5>
              <p className="capitalize !leading-snug">{work.content}</p>
              <div className="flex gap-4">
                {work.tags.map((tag, index) => (
                  <button
                    key={index}
                    className={clsx(
                      "px-6 py-2 rounded-lg cursor-pointer border text-black dark:text-white border-black dark:border-gray-50/20 bg-transparent"
                    )}
                  >
                    <p>{tag}</p>
                  </button>
                ))}
              </div>
            </div>
            <img src={work.img} alt={work.title} />
          </div>
        ))
      )}
    </section>
  );
};

export default WorksContent;
