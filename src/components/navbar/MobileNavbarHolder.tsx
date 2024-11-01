"use client";

import { useNavbar } from "./NavbarProvider";

export function MobileNavbarHolder({
  children,
}: {
  children: React.ReactNode;
}) {
  const { nav } = useNavbar();

  return (
    <nav
      className={
        nav
          ? `absolute left-0 top-0 flex h-screen w-full flex-col overflow-y-hidden bg-black/90 px-4 py-7 text-gray-300 duration-300 ease-in md:hidden`
          : `absolute left-[-100%] top-0 h-screen duration-300 ease-in`
      }
    >
      {children}
    </nav>
  );
}
