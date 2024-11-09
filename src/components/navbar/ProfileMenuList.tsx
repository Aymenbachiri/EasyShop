import { SignOutButton } from "@clerk/nextjs";
import { MyLink } from "../common/MyLink";
import { DashboardIcon } from "@/lib/icons/DashboardIcon";
import { SellProductIcon } from "@/lib/icons/SellProductIcon";
import { LogoutIcon } from "@/lib/icons/LogoutIcon";

const MenuList = [
  { label: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
  { label: "SellProduct", icon: <SellProductIcon />, href: "/sell-product" },
];

export function ProfileMenuList() {
  return (
    <>
      <li className="flex flex-col items-center justify-between gap-1 divide-y-2 hover:cursor-pointer">
        {MenuList.map((item) => (
          <MyLink
            key={item.href}
            href={item.href}
            className="flex w-full items-center justify-between gap-1 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            {item.icon}
            {item.label}
          </MyLink>
        ))}
      </li>
      <li className="flex w-full items-center justify-between gap-1 px-4 py-2 text-red-700 hover:bg-gray-100 dark:hover:bg-gray-700">
        <section className="flex w-full items-center justify-between gap-1 text-red-700 dark:text-red-700">
          <LogoutIcon />
          <SignOutButton />
        </section>
      </li>
    </>
  );
}
