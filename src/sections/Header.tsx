import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-[0_2px_2px_#00000] z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl text-black">PhotoBlast</h1>
            <MenuIcon className="h-5 w-5 cursor-pointer md:hidden"/>
            <nav className="hidden md:flex gap-6 text-black/70 items-center">
              <a href="#" className="hover:text-black">Home</a>
              <a href="#" className="hover:text-black">About us</a>
              <a href="#" className="hover:text-black">Gallery</a>
              <a href="#" className="hover:text-black">Pricelist</a>
              <button className="btn btn-primary">Book your session</button>
            </nav>
          </div>
        </div>
      </div>

    </header>
  );
};
