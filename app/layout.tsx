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
  title: "Atelier Construct | Building Beauty with Precision",
  description:
    "Luxury construction and remodeling studio delivering architecture-grade craftsmanship across residential and commercial spaces.",
  metadataBase: new URL("https://atelier-construct.example"),
  openGraph: {
    title: "Atelier Construct | Building Beauty with Precision",
    description:
      "Luxury construction and remodeling studio delivering architecture-grade craftsmanship across residential and commercial spaces.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Construct | Building Beauty with Precision",
    description:
      "Luxury construction and remodeling studio delivering architecture-grade craftsmanship across residential and commercial spaces.",
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
