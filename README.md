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
