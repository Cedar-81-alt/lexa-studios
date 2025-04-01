import React from "react";

function WorkWithUs() {
  return (
    <section className="flex items-center space-x-10 mt-20 py-10 justify-between leading-snug">
      <h1 className="text-neon-pink uppercase">
        Ready To <br />
        Work With Us?
      </h1>
      <div className="space-y-4 dark:text-white">
        <input
          type="text"
          className="border-t-0 border-x-0 px-0 outline-none border-b pb-2 border-b-black dark:border-b-warm-white text-black focus:border-0 focus:border-b focus:dark:border-b-warm-white dark:text-white"
          placeholder="Phone number"
        />
        <p>
          By sending your number, you are agreeing to our Data Protection
          Agreement.
        </p>
      </div>
    </section>
  );
}

export default WorkWithUs;
