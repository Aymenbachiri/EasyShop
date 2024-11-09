import { CartLink } from "./CartLink";
import { MobileNavLinks } from "./MobileNavLinks";
import { ProfileMenu } from "./ProfileMenu";
import ThemeSwitch from "./ThemeSwitch";

export function MobileNavbar() {
  return (
    <ul className="h-full w-full pt-12 text-center">
      <MobileNavLinks />
      <li className="flex items-center justify-center py-8 text-2xl text-white md:hidden">
        <ProfileMenu />
      </li>
      <li className="py-8 text-2xl">
        <CartLink />
      </li>
      <li className="flex items-center justify-center py-8 text-2xl text-white md:hidden">
        <ThemeSwitch />
      </li>
    </ul>
  );
}
