import { MyLink } from "../common/MyLink";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <MyLink href={link.href as any} key={link.href}>
          <li className="py-1 duration-200 hover:border-b hover:border-b-black dark:hover:border-b-gray-300">
            {link.label}
          </li>
        </MyLink>
      ))}
    </>
  );
}
