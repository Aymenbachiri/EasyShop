import { NavLinks } from "./NavLinks";
import ThemeSwitch from "./ThemeSwitch";
import MobileNavBtn from "./MobileNavBtn";
import { MyLink } from "../common/MyLink";

export function LargeScreenNavbar() {
  return (
    <nav className="z-10 mx-auto flex min-h-[50px] max-w-screen-xl flex-wrap items-center justify-between">
      <MyLink href="/">logo</MyLink>

      <ul className="hidden items-center justify-between gap-x-8 px-4 md:flex">
        <NavLinks />
        {/* <IsAuth>
          <ProfileMenu />
        </IsAuth>
        <li>
          <CartLink />
        </li> */}
      </ul>

      {/* Theme Switch */}
      <section className="hidden items-center justify-between gap-x-3 md:flex">
        <ThemeSwitch />
      </section>

      {/* Mobile Nav Icon */}
      <MobileNavBtn />
    </nav>
  );
}
