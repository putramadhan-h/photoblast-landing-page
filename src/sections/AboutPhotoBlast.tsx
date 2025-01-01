import aboutImg from "@/assets/about-photoblast-image.png";
import Image from "next/image";


export const AboutPhotoBlast = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#d1d0d0] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag2">About PhotoBlast</div>
          </div>
          <h2 className="section-title mt-5">We bring moments to life with a touch of creativity.</h2>
          <p className="section-description mt-5">From weddings and birthdays to corporate events, we bring moments to life with high-quality prints, unique props, and a touch of creativity.</p>
        </div>
        <div className="relative flex justify-center">
          <Image src={aboutImg} width={850} alt="About Image" className="mt-10"/> 
        </div>
      </div>
    </section>
  );
};
