import SocialX from  "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex font-bold text-xl text-white md:text-3xl">
          <h2 className="">PhotoBlast</h2>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Gallery</a>
          <a href="#">Pricelist</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX/> 
          <SocialInsta/>
          <SocialLinkedin/>
          <SocialPin/>
          <SocialYoutube/>
        </div>
        <p className="mt-6 font-medium">&copy; 2024 PhotoBlast. All rights reserved.</p>
      </div>
    </footer>
  );
};
