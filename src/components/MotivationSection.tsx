"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Profile } from "@/data/profile";

interface MotivationSectionProps {
  profile: Profile;
}

export function MotivationSection({ profile }: MotivationSectionProps) {
  return (
    <motion.section
      className="relative w-full pt-[5vh] pl-[10vw] flex flex-col lg:pt-[clamp(5rem,15vh,10rem)] lg:pl-[15vw] lg:flex-row lg:items-center lg:gap-[10vw]"
      initial={{ opacity: 0, filter: "blur(1px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      aria-labelledby="motivation-heading"
    >
      {/* Left: text */}
      <div className="lg:h-[clamp(20rem,60vh,40rem)] flex flex-col items-start justify-start">
        <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
          <h2 id="motivation-heading">MY MOTIVATION</h2>
        </div>

        <div className="w-[80vw] lg:w-[35vw] h-px bg-[#888888aa]" />

        <div className="w-[80vw] lg:w-[35vw] flex flex-col pt-[5vh] lg:pt-[clamp(1rem,7.5vh,3rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-extralight gap-1.5 leading-[clamp(1.1rem,3vh,1.4rem)]">
          {profile.motivation.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Right: image */}
      {/* <div className="mt-[5vh] w-[80vw] aspect-8/5 lg:w-[45vw] overflow-hidden lg:mt-0">
        <Image
          src={profile.motivationImage}
          alt="Cinematic landscape photograph"
          width={800}
          height={500}
          className="w-full h-full object-contain opacity-80"
          sizes="(min-width: 1024px) 35vw, 80vw"
        />
      </div> */}
    </motion.section>
  );
}
