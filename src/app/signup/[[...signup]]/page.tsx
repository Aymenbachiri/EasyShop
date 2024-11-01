import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12 sm:px-0">
      <SignUp />
    </main>
  );
}
