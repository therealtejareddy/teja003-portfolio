import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function CTA() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="pt-36 relative w-full">
      <img className="w-30 m-auto mb-2" src="/static/doodles/lineBreak.svg" />
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Interested in Working Together?
        </h2>
        <a
          href="mailto:yuvatejareddy003@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        data-aos="flip-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        >
          Get in Touch
        </a>
      </div>

      <img
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src="/static/doodles/hero/fancyLines.svg"
      />
    </div>
  );
}

export default CTA;
