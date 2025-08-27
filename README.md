# Descope Authentication Flows Demo

This is a [Next.js](https://nextjs.org) project that demonstrates various authentication methods using [Descope](https://descope.com) flows.

## Features

- 🔐 Multiple authentication flow types (Magic Link, OTP, Social Login, SSO, Passkeys, etc.)
- 🎛️ Easy switching between different authentication methods
- 🛡️ Protected routes with middleware
- 📱 Modern, responsive UI
- ⚡ Built with Next.js App Router and TypeScript

## Getting Started

### 1. Set up Descope

1. Create a free account at [Descope Console](https://app.descope.com/)
2. Create a new project
3. Copy your Project ID from the project settings

### 2. Configure Environment Variables

1. Copy your Descope Project ID
2. Update `.env.local` with your actual Project ID:

```bash
NEXT_PUBLIC_DESCOPE_PROJECT_ID=your_actual_project_id_here
```

### 3. Install Dependencies and Run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Home Page**: Overview and navigation to demo pages
2. **Auth Demo** (`/auth`): Switch between different authentication flows
3. **Protected Page** (`/protected`): Demonstrates session verification

## Available Authentication Methods

- Sign Up / Sign In
- Magic Link
- OTP (SMS)
- TOTP (Authenticator)
- Social Login
- SSO
- Passkeys
- nOTP (WhatsApp)
- Embedded Link

## Project Structure

```
src/
├── app/
│   ├── auth/page.tsx          # Authentication demo page
│   ├── protected/page.tsx     # Protected page requiring auth
│   ├── layout.tsx             # Root layout with AuthProvider
│   └── page.tsx               # Home page
├── components/
│   └── AuthFlowSwitcher.tsx   # Main component for switching flows
└── middleware.ts              # Route protection middleware
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
