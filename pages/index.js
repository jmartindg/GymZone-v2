import Head from "next/head";
import React from "react";
import About from "../components/About";
import Faq from "../components/Faq";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>GymZone - Be the Best Version of Yourself</title>
      </Head>
      <Hero />
      <About />
      <Faq />
    </>
  );
};

export default Home;
