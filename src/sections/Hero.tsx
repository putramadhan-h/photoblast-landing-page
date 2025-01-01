import ArrowIcon from '@/assets/arrow-right.svg';

export const Hero = () => {
  return (
    <>
      <section className="relative bg-heroBg bg-no-repeat bg-cover bg-bottom bg-fixed w-full h-screen flex items-center justify-center">

        <div className="absolute inset-0 bg-heroBg bg-no-repeat bg-cover bg-bottom bg-fixed filter blur-sm"></div>
        
        <div className="relative z-10 container text-center">
          <div className="md:w-[650px] mx-auto">
            <div className="tag">Blast your moment!</div>
            <h1 className="text-3xl text-white md:text-6xl font-bold tracking-tighter mt-6">
              Make your events unforgettable with PhotoBlast.
            </h1>
            <p className="text-xl text-white tracking-tight mt-6">
              We specialize in creating fun, interactive photobooth experiences for all your events.
            </p>
            <div className="flex gap-3 items-center justify-center mt-[30px]">
              <button className="btn btn-primary">Book now</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
