import { IsAuth } from "@/lib/helpers/IsAuth";
import { UserIcon } from "@/lib/icons/UserIcon";
import { ProfileMenuList } from "./ProfileMenuList";
import { ArrowIcon } from "@/lib/icons/ArrowIcon";

export function ProfileMenu() {
  return (
    <IsAuth>
      <main className="group relative inline-block text-left">
        <section className="flex cursor-pointer items-center gap-1">
          <UserIcon />
          <span className="text-gray-300 dark:text-gray-200 md:text-gray-700">
            Profile
          </span>
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-90">
            <ArrowIcon />
          </span>
        </section>

        <ul className="invisible absolute -right-8 z-20 w-52 origin-top-right divide-y-2 rounded-md border border-gray-200 bg-white opacity-0 shadow-lg outline-none transition-opacity duration-300 group-hover:visible group-hover:opacity-100 dark:border-gray-700 dark:bg-gray-800 md:-right-10 md:w-48">
          <ProfileMenuList />
        </ul>
      </main>
    </IsAuth>
  );
}
