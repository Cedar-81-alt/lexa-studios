import Hero from "../components/services/Hero";
import Navbar from "../components/Navbar";
import OurServices from "../components/services/OurServices";
import WorkWithUs from "../components/services/WorkWithUs";
import Faqs from "../components/services/Faqs";

function Services() {
  return (
    <main className="urbanist-medium">
      {/* <div className="px-16">
        <Navbar />
      </div> */}
      <Hero />
      <div className="mt-26 space-y-10 lg:space-y-26">
        <OurServices />
        <WorkWithUs />
        <Faqs />
      </div>
    </main>
  );
}

export default Services;
