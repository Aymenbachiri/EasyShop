"use client";

import { MyLink } from "../common/MyLink";
import { useNavbar } from "./NavbarProvider";

type MobileNavbarLinkProps = {
  link: {
    href: string;
    label: string;
  };
};

export function MobileNavbarLink({ link }: MobileNavbarLinkProps) {
  const { handleNav } = useNavbar();

  return (
    <MyLink
      className="py-2 hover:border-b"
      href={link.href}
      onClick={handleNav}
    >
      {link.label}
    </MyLink>
  );
}
