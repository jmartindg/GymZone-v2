import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-hero-img bg-cover bg-no-repeat min-h-screen">
      <div className="min-h-screen container mx-auto flex items-center px-4">
        <section className="w-full md:w-4/5 lg:w-2/4">
          <h1 className="font-black uppercase text-white text-3xl md:text-4xl lg:text-5xl">
            Be the <span className="text-primary">Best Version</span> of Yourself
          </h1>
          <p className="text-white text-base md:text-lg pt-5 pb-8 w-full md:w-3/4">
            Start your journey at our gym and unleash your full potential from as low as $35
          </p>
          <Link href="/">
            <a className="hero-btn">Start Membership</a>
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Hero;
