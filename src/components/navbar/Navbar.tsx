import { LargeScreenNavbar } from "./LargeScreenNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { MobileNavbarHolder } from "./MobileNavbarHolder";
import { NavbarHolder } from "./NavbarHolder";
import { NavbarProvider } from "./NavbarProvider";

export default function Navbar() {
  return (
    <NavbarProvider>
      <NavbarHolder>
        {/* Large Screen Menu */}
        <LargeScreenNavbar />

        {/* Mobile Menu */}
        <MobileNavbarHolder>
          <MobileNavbar />
        </MobileNavbarHolder>
      </NavbarHolder>
    </NavbarProvider>
  );
}
