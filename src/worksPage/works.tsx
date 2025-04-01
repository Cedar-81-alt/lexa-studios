import React, { useState } from "react";
import Hero from "../components/works/Hero";
import WorksContent from "../components/works/WorksContent";

const Works: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  return (
    <main className="space-y-20">
      <Hero setSelectedTag={setSelectedTag} selectedTag={selectedTag} />
      <WorksContent selectedTag={selectedTag} />
    </main>
  );
};

export default Works;
