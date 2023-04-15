const NavBar = () => {
  return (
    <nav className="overflow-hidden">
      <div className="flex relative justify-between items-center min-h-16 px-5 sm:px-10 md:px-25 shadow-hero-1">
        {/* logo */}
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/Launder-logo.svg"}
          className="h-4 md:h-8 "
        />
        {/* links */}
        <div className="hidden lg:flex items-center text-xl gap-6 justify-between">
          <a href="">Pricing</a>
          <a href="">Services</a>
          <a href="">Business</a>
          <a href="">Blog</a>
          <a href="">FAQS</a>
        </div>
        {/* actions */}
        <div className="hidden lg:flex gap-2 md:gap-6">
          <button className="btn-1 btn-sm md:btn-md">Login</button>
          <button className="btn-2 btn-sm md:btn-md">Book Now</button>
        </div>
        <div className="block lg:hidden ">
          <label htmlFor="hameburger" className="cursor-pointer">
            <img
              src={
                import.meta.env.VITE_BASE_URL +
                "/images/hamburger-menu-icon.svg"
              }
              className="h-6"
              alt=""
            />
          </label>
        </div>
      </div>
      <input
        className="peer hidden checked:group-[.hame]:hidden"
        type="checkbox"
        defaultChecked
        id="hameburger"
      />
      {/*drawe menu */}
      <div className="peer-checked:h-0  flex flex-col items-center py-2 gap-4 shadow-hero-1">
        <div className="flex flex-col items-center text-xl gap-6 py-4 justify-between">
          <a href="">Pricing</a>
          <a href="">Services</a>
          <a href="">Business</a>
          <a href="">Blog</a>
          <a href="">FAQS</a>
        </div>
        {/* actions */}
        <div className="flex gap-2 md:gap-6 ">
          <button className="btn-1 btn-sm md:btn-md">Login</button>
          <button className="btn-2 btn-sm md:btn-md">Book Now</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
