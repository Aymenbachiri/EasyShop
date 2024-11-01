"use client";

import { useNavbar } from "./NavbarProvider";

export function NavbarHolder({ children }: { children: React.ReactNode }) {
  const { shadow } = useNavbar();

  return (
    <header
      className={
        shadow
          ? "fixed start-0 top-0 z-[100] w-full shadow-xl backdrop-blur-md duration-300 ease-in-out dark:shadow-[#dedbdb] dark:duration-300 dark:ease-in-out"
          : "fixed start-0 top-0 z-20 w-full"
      }
    >
      {children}
    </header>
  );
}
