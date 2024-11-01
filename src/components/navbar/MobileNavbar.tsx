import { MobileNavLinks } from "./MobileNavLinks";
import ThemeSwitch from "./ThemeSwitch";

export function MobileNavbar() {
  return (
    <ul className="h-full w-full pt-12 text-center">
      <MobileNavLinks />
      {/* <li className="md:hidden text-2xl py-8 flex justify-center items-center text-white">
        <ProfileMenu />
      </li>
      <li className="text-2xl py-8">
        <CartLink />
      </li>
      <li className="text-2xl py-8">
        <LocaleMenu />
      </li> */}
      <li className="flex items-center justify-center py-8 text-2xl text-white md:hidden">
        <ThemeSwitch />
      </li>
    </ul>
  );
}
