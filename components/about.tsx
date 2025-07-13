"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I embarked on a diverse journey
        that shaped my perspective on technology and innovation. From hands-on construction work
        to diving into{" "}
        <span className="font-medium">full-stack development</span>,{" "}
        <span className="italic">my favorite part of programming</span> is the
        problem-solving aspect and the{" "}
        <span className="underline">continuous learning curve</span>. I thrive on{" "}
        <span className="font-medium">exploring emerging technologies</span> and adapting
        to new frameworks, whether it's web development, mobile apps, or{" "}
        <span className="font-medium">AI/ML innovations</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy staying curious
        about the world around me. I love{" "}
        <span className="font-medium">experimenting with new tools</span>,
        contributing to open-source projects, and exploring how technology can solve
        real-world problems. My diverse background has taught me that{" "}
        <span className="font-medium">every experience adds value</span> to my approach
        as a developer.
      </p>
    </motion.section>
  );
}
