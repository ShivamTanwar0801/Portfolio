import React from "react";
import { BIO } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="flex max-w-4xl flex-col gap-12 pt-20" id="about">
      <motion.h2
        className="text-center text-3xl lg:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {BIO.map((bio, index) => (
          <motion.p
            key={index}
            className="mb-4 text-lg lg:text-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.5 }}
          >
            {bio}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
