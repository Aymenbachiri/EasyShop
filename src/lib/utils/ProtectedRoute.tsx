import { Protect } from "@clerk/nextjs";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return (
    <Protect
      fallback={
        <main className="flex h-screen items-center justify-center bg-gray-100 p-4 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
          <section className="flex items-center justify-center gap-5 space-y-4 text-center">
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/96/31/sign-in-with-hand-pointer-icon-login-symbol-vector-2849631.jpg" // Replace with your image path
              alt="Sign in required"
              className="mx-auto w-1/2 object-contain md:w-1/3 lg:w-1/4"
              style={{ maxWidth: "300px", borderRadius: "50%" }}
            />
            <p className="pl-10 text-lg font-semibold">
              Sign in required to view this page
            </p>
          </section>
        </main>
      }
    >
      {children}
    </Protect>
  );
}
