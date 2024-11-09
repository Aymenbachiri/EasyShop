import { MyLink } from "@/components/common/MyLink";
import { auth } from "@clerk/nextjs/server";
import { LoginIcon } from "../icons/LoginIcon";

export async function IsAuth({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) {
    return (
      <MyLink
        className="flex items-center justify-center gap-1 rounded px-4 py-2 text-black transition-colors duration-200 hover:cursor-pointer hover:border hover:border-b hover:border-b-black dark:text-white dark:hover:border-b-gray-300"
        href="/signin"
      >
        <LoginIcon />
        Signin
      </MyLink>
    );
  }

  return <>{children}</>;
}
