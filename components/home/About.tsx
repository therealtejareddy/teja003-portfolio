import React from "react";
import SectionTitle from "../global/SectionTitle";
// import { testimonials } from "@/data/content/home";

function About() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="Know more about Me & Myself!!!" />
      <div className="max-w-3xl m-auto">
        <h1 className="text-4xl font-bold">Hello!!!</h1>
        <p>
          I'm an India based software developer with a goal-driven creative mindset and passion for learning and innovating.
        </p>
        <br/>
        <p>
          I'm a final year engineering graduate in Computer Science and Engineering at Saveetha Engineering College, Chennai with 80% aggregate
        </p>
      </div>
    </div>
  );
}

export default About;
