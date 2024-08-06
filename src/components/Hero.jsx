import React from "react";
import { HERO } from "../constants";
import profileImage from "../assets/shivam.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center mt-4">
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 lg:p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center">
          <motion.img
            src={profileImage}
            width={550}
            height={550}
            alt="Shivam"
            className="rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
