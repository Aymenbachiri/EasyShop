import { NavLinks } from "./NavLinks";
import ThemeSwitch from "./ThemeSwitch";
import MobileNavBtn from "./MobileNavBtn";
import { MyLink } from "../common/MyLink";
import { ProfileMenu } from "./ProfileMenu";
import { CartLink } from "./CartLink";
import { MyImage } from "../common/MyImage";

export function LargeScreenNavbar() {
  return (
    <nav className="z-10 mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
      <MyLink href="/" passHref>
        <MyImage
          src="/assets/images/logo.png"
          alt="logo"
          width={80}
          height={20}
          sizes="100px"
        />
      </MyLink>

      <ul className="hidden items-center justify-between gap-x-8 px-4 md:flex">
        <NavLinks />
        <ProfileMenu />
        <li>
          <CartLink />
        </li>
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
