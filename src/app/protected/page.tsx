"use client";

import { useDescope, useSession, useUser } from "@descope/nextjs-sdk/client";
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProtectedPage() {
  const { isAuthenticated, isSessionLoading } = useSession();
  const { user, isUserLoading } = useUser();
  const { logout } = useDescope();

  const router = useRouter();

  const handleLogout = useCallback(async () => {
    await logout();
    window.open("/", "_self");
  }, [logout]);

  useEffect(() => {
    if (!isSessionLoading && !isAuthenticated) {
      router.push("/auth");
    }
  }, [isSessionLoading, isAuthenticated, router]);

  if (isSessionLoading || isUserLoading) {
    return (
      <div className="flex justify-center items-center min-h-svh text-lg">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-svh text-lg">
        Redirecting to authentication...
      </div>
    );
  }

  return (
    <main className="min-h-svh bg-sky-50 dark:bg-neutral-900 px-5 py-10">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl mb-6 text-green-700 dark:text-green-400 font-semibold">
          🎉 Protected Page
        </h1>

        <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow mb-8 text-left">
          <h2 className="mb-4 text-gray-900 dark:text-gray-100">
            Welcome, you&apos;re authenticated!
          </h2>

          {user && (
            <div className="mt-6">
              <h3 className="mb-4 text-gray-700 dark:text-gray-300">
                User Information:
              </h3>
              <div className="bg-gray-100 dark:bg-neutral-900 p-4 rounded-md font-mono text-sm overflow-auto">
                <pre>{JSON.stringify(user, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-base"
          >
            ← Logout & Go Home
          </button>
          <Link
            href="/auth"
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-md text-base"
          >
            Auth Demo
          </Link>
        </div>
      </div>
    </main>
  );
}
