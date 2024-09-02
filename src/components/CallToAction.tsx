"use client"
import HelixImage from '../assets/images/helix2.png'  // Replace with a relevant image for Cloud DevOps
import EmojiImage from '../assets/images/emojistar.png' // Replace with a relevant image for Cloud DevOps
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div className="bg-black text-white py-[72px] sm:py-24" ref={containerRef}>
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image src={HelixImage} alt="Cloud DevOps" className="absolute top-6 left-[calc(100%+36px)]" />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image src={EmojiImage} alt="Join Community" className="absolute -top-[120px] right-[calc(100%+30px)]" />
        </motion.div>

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Join the Cloud DevOps Hub Community</h2>
        {/* <p className="text-xl text-white/70 mt-5">
          Connect with like-minded professionals and accelerate your Cloud and DevOps journey. Gain instant access to exclusive resources, expert insights, and a supportive community.
        </p> */}
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <button className="bg-white text-black h-12 rounded-lg px-5">Get Started</button>
        </form>
      </div>
    </div>
  )
};
