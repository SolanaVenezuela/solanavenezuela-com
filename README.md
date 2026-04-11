<p align="center">
	<img src="./public/images/solanavenezuela-hero.jpg" alt="Solana Venezuela hero" width="1200" />
</p>

# Solana Venezuela

Landing page and community site for Solana Venezuela.

## Overview

This repository contains the public website for Solana Venezuela, including:

- the homepage and branded landing experience
- a membership request form
- transactional email flows for membership requests through Resend Templates

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn on Base UI
- Framer Motion
- Zod
- Resend + React Email

## Development

Install dependencies and start the local server:

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm resend:sync-templates
```

## Environment Variables

Use `.env.example` as the base for local configuration.

Required values for the membership email flow:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_FROM_NAME`
- `RESEND_MEMBER_REQUEST_TO`
- `RESEND_SUPPORT_EMAIL`
- `MEMBER_REQUEST_STATUS_TOKEN`
- `NEXT_PUBLIC_SITE_URL`

## Resend Templates

The membership flow uses published Resend templates. To create or update them through the API, run:

```bash
pnpm resend:sync-templates
```

That command syncs these template aliases:

- `solana-venezuela-member-request-internal`
- `solana-venezuela-member-request-received`
- `solana-venezuela-member-request-accepted`
- `solana-venezuela-member-request-rejected`

For payload examples and route details, see `docs/resend-member-requests.md`.

## Project Structure

```text
app/                     App Router pages and API routes
components/home/         Homepage sections and motion helpers
emails/                  React Email template sources
lib/                     Shared content, validation, and Resend helpers
public/images/           Brand assets and homepage imagery
scripts/                 Utility scripts such as Resend template sync
```
