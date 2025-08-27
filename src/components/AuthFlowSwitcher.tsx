"use client";

import { useState } from "react";
import { Descope } from "@descope/nextjs-sdk";
import { useRouter } from "next/navigation";

const AuthFlowSwitcher = () => {
  const router = useRouter();
  const [flowId, setFlowId] = useState("sign-up-or-in");

  const authMethods = [
    { id: "sign-up-or-in", name: "Sign Up or In" },
    { id: "sign-in", name: "Sign In" },
    { id: "sign-up", name: "Sign Up" },
    { id: "sign-up-or-in-n-otp-whats-app", name: "nOTP (WhatsApp)" },
    { id: "sign-up-or-in-otp", name: "OTP (SMS)" },
    { id: "sign-up-or-in-totp", name: "TOTP (Authenticator)" },
    { id: "magic-link-with-email-scanner-protection", name: "Magic Link" },
    { id: "sign-in-social", name: "Social Login" },
  ];

  const handleFlowChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFlowId(event.target.value);
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Descope Authentication Flow Demo
      </h2>

      <div className="mb-5">
        <label htmlFor="auth-method" className="block mb-2 font-medium">
          Choose an authentication method:
        </label>
        <select
          id="auth-method"
          onChange={handleFlowChange}
          value={flowId}
          className="px-3 py-2 text-base rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 min-w-52"
        >
          {authMethods.map((method) => (
            <option key={method.id} value={method.id}>
              {method.name}
            </option>
          ))}
        </select>
      </div>

      <div className="border border-gray-200 dark:border-neutral-700 rounded-lg p-5 bg-gray-50 dark:bg-neutral-800/50">
        <Descope
          flowId={flowId}
          onSuccess={(e: any) => {
            console.log("Authentication successful:", e);
            router.push("/protected");
          }}
          onError={(e: any) => {
            console.log("Authentication error:", e);
          }}
        />
      </div>
    </div>
  );
};

export default AuthFlowSwitcher;
