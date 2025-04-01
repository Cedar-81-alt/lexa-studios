import Navbar from "../components/Navbar";
import Hero from "../components/homepage/Hero";
import Services from "../components/homepage/Services";
import FeaturedWork from "../components/homepage/featuredWork";

function Home() {
  return (
    <main className="urbanist-medium ">
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <FeaturedWork />
    </main>
  );
}

export default Home;
