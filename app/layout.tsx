import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import { getLocale } from "next-intl/server";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://solanavenezuela.com"
);

export const metadata: Metadata = {
  metadataBase,
  category: "technology",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0c0f13",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
