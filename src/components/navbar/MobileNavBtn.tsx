"use client";

import { MenuIcon } from "@/lib/icons/MenuIcon";
import { CloseIcon } from "@/lib/icons/CloseIcon";
import { useNavbar } from "./NavbarProvider";

export default function MobileNavBtn() {
  const { handleNav, nav } = useNavbar();

  return (
    <main
      onClick={handleNav}
      className="absolute right-0 z-10 cursor-pointer p-4 md:hidden"
    >
      {!nav ? <MenuIcon /> : <CloseIcon />}
    </main>
  );
}
