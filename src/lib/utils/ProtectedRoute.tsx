import { MyImage } from "@/components/common/MyImage";
import { MyLink } from "@/components/common/MyLink";
import { Protect } from "@clerk/nextjs";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return (
    <Protect
      fallback={
        <main
          style={{ gap: 60 }}
          className="flex h-screen flex-col items-center justify-center gap-10 p-4 md:flex-row"
        >
          <section>
            <MyImage
              src={"/assets/images/signin-required.webp"}
              alt="Sign in required"
              width={400}
              height={400}
              sizes="(min-width: 1020px) 400px, (min-width: 780px) calc(37.73vw + 23px), (min-width: 460px) 400px, calc(94.29vw - 15px)"
              className="rounded-2xl"
            />
          </section>
          <section className="flex flex-col items-center justify-center gap-5">
            <p className="text-2xl md:text-3xl">
              Sign in required to access this page
            </p>
            <MyLink
              className="mt-4 text-xl font-medium text-blue-500 hover:underline"
              href="/signin"
            >
              Sign in
            </MyLink>
          </section>
        </main>
      }
    >
      {children}
    </Protect>
  );
}
