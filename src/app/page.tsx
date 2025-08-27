import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-svh p-8 gap-16 place-items-center font-sans">
      <main className="flex flex-col gap-8 row-start-2">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-center mb-8 text-3xl sm:text-4xl font-semibold">
          Descope Authentication Flows Demo
        </h1>

        <p className="text-center mb-8 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          Explore different authentication methods and see how Descope flows
          work in action.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            className="inline-flex items-center justify-center h-12 px-5 rounded-full text-base font-medium bg-gray-900 text-white hover:bg-gray-700 transition-colors"
            href="/auth"
          >
            🔐 Try Authentication Flows
          </Link>
          <Link
            href="/protected"
            className="inline-flex items-center justify-center h-12 px-5 rounded-full text-base font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors min-w-[158px]"
          >
            🛡️ Protected Page
          </Link>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold">
            Available Authentication Methods:
          </h3>
          <ul className="text-left inline-block my-4 space-y-1">
            <li>Step Up</li>
            <li>Sign Up / Sign In</li>
            <li>Sign In</li>
            <li>Sign Up</li>
            <li>nOTP (WhatsApp)</li>
            <li>OTP (SMS)</li>
            <li>TOTP (Authenticator)</li>

            <li>Magic Link</li>
            <li>Social Login</li>
            <li>SSO</li>
            <li>Passkeys</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
