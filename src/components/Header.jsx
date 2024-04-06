import LSWLogo from "../assets/lws-logo-en.svg";

export default function Header() {
  return (
    <>
      {/* Navbar Starts */}
      <nav className="py-6 md:py- lg:px-20 fixed top-0 w-full !bg-[#191D26] z-9">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          {/* Logo */}
          <a href="/">
            <img className="h-[45px]" src={LSWLogo} />
          </a>
          {/* Logo Ends */}
        </div>
      </nav>
      {/* Navbar Ends */}
    </>
  );
}
