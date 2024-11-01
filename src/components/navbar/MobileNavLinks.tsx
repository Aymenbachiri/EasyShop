import { MobileNavbarLink } from "./MobileNavbarLink";

export function MobileNavLinks() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.label} className="py-8 text-2xl">
          <MobileNavbarLink link={link} />
        </li>
      ))}
    </>
  );
}
