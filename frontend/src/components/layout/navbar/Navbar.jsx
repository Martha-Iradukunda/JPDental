import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import Container from "../../common/Container";
import Button from "../../ui/Button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container className="flex items-center justify-between h-20">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="JP Dental Clinic"
            className="h-14 w-auto"
          />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">

          <NavLink
            to="/"
            className="font-medium text-slate-700 hover:text-[#005BAC] transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="font-medium text-slate-700 hover:text-[#005BAC] transition"
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className="font-medium text-slate-700 hover:text-[#005BAC] transition"
          >
            Services
          </NavLink>

          <NavLink
            to="/technology"
            className="font-medium text-slate-700 hover:text-[#005BAC] transition"
          >
            Technology
          </NavLink>

          <NavLink
            to="/doctors"
            className="font-medium text-slate-700 hover:text-[#005BAC] transition"
          >
            Doctors
          </NavLink>

          <NavLink
            to="/gallery"
            className="font-medium text-slate-700 hover:text-[#005BAC] transition"
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className="font-medium text-slate-700 hover:text-[#005BAC] transition"
          >
            Contact
          </NavLink>

        </nav>

        {/* Appointment Button */}
        <div className="hidden lg:block">
          <Button>
            Book Appointment
          </Button>
        </div>

      </Container>
    </header>
  );
};

export default Navbar;

// import Container from "../../common/Container";
// import Logo from "./Logo";
// import DesktopNav from "./DesktopNav";
// import MobileNav from "./MobileNav";

// const Navbar = () => {
//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm">
//       <Container className="flex h-20 items-center justify-between">
//         <Logo />

//         <DesktopNav />

//         <MobileNav />
//       </Container>
//     </header>
//   );
// };

// export default Navbar;