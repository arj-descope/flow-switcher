import AuthFlowSwitcher from "@/components/AuthFlowSwitcher";
import Link from "next/link";

export default function AuthPage() {
  return (
    <main className="min-h-svh bg-neutral-50 dark:bg-neutral-900 px-5 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl mb-4 text-gray-900 dark:text-gray-100 font-semibold">
          Descope Authentication Demo
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore different authentication methods by selecting from the
          dropdown below. Each flow demonstrates a different way users can
          authenticate with your application.
        </p>
      </div>

      <AuthFlowSwitcher />

      <div className="text-center mt-10">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-base"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
