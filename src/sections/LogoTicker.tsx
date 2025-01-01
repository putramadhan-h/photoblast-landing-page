"use client";
import gHappyLogo from "@/assets/generasi-happy-logo.png";
import luviumLogo from "@/assets/kopiluvium-logo.png";
import Image from "next/image";
import { motion } from 'framer-motion';


export const LogoTicker = () => {
  return (
    <div className="py-5 md:py-10 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] ">
          <motion.div className="flex gap-14 flex-none pr-14" animate={{translateX: "-50%",}} transition={{duration: 20, repeat:Infinity, ease: "linear",repeatType: "loop"}}>
            <Image src={gHappyLogo} alt="Generasi Happy Logo" className="logo-ticker-image" />
            <Image src={luviumLogo} alt="Kopiluvium Logo" className="logo-ticker-image" />
            <Image src={gHappyLogo} alt="Generasi Happy Logo" className="logo-ticker-image" />
            <Image src={luviumLogo} alt="Kopiluvium Logo" className="logo-ticker-image" />
            <Image src={gHappyLogo} alt="Generasi Happy Logo" className="logo-ticker-image" />
            <Image src={luviumLogo} alt="Kopiluvium Logo" className="logo-ticker-image" />
            <Image src={gHappyLogo} alt="Generasi Happy Logo" className="logo-ticker-image" />
            <Image src={luviumLogo} alt="Kopiluvium Logo" className="logo-ticker-image" />

            {/* Second set image for animation */}
            <Image src={gHappyLogo} alt="Generasi Happy Logo" className="logo-ticker-image" />
            <Image src={luviumLogo} alt="Kopiluvium Logo" className="logo-ticker-image" />
            <Image src={gHappyLogo} alt="Generasi Happy Logo" className="logo-ticker-image" />
            <Image src={luviumLogo} alt="Kopiluvium Logo" className="logo-ticker-image" />
            <Image src={gHappyLogo} alt="Generasi Happy Logo" className="logo-ticker-image" />
            <Image src={luviumLogo} alt="Kopiluvium Logo" className="logo-ticker-image" />
            <Image src={gHappyLogo} alt="Generasi Happy Logo" className="logo-ticker-image" />
            <Image src={luviumLogo} alt="Kopiluvium Logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
