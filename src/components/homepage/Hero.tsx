function Hero() {
  return (
    <section className="flex gap-4 py-10">
      <div className="flex-1 space-y-8">
        <div className="space-y-2">
          <h3 className="lg text-neon-pink">
            BRINGING IMAGINATION TO LIFE IN RECORD TIME{" "}
          </h3>
          <p className="quintessential-regular lg leading-snug">
            Ready to execute{" "}
            <span className="text-neon-pink">
              high level creativity for brands, companies, and individuals
              looking FOR impact, creativity & conversions{" "}
            </span>
          </p>
        </div>
        <button className="rounded-md py-3 px-6">
          <p>Get in touch</p>
        </button>
      </div>
      <img src="./images/homeimg1.png" className="flex-1" />
    </section>
  );
}

export default Hero;
