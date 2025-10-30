import type { Metadata } from "next";
import { Outfit, Work_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Titino Construction | Building Beauty with Precision",
  description:
    "Titino Construction delivers architecture-grade craftsmanship for luxury residential and commercial spaces across the Americas.",
  metadataBase: new URL("https://titinoconstruction.com"),
  openGraph: {
    title: "Titino Construction | Building Beauty with Precision",
    description:
      "Titino Construction delivers architecture-grade craftsmanship for luxury residential and commercial spaces across the Americas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Titino Construction | Building Beauty with Precision",
    description:
      "Titino Construction delivers architecture-grade craftsmanship for luxury residential and commercial spaces across the Americas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${workSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
