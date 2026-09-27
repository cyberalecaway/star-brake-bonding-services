import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Star Brake Bonding Services | Auto Repair in Talisay City, Cebu",
  description:
    "Brake bonding, clutch lining, underchassis, transmission, engine and A/C repair in Lawaan I, Talisay City, Cebu. Open daily from 8:00 AM to 5:00 PM.",
  keywords: [
    "brake bonding Cebu",
    "automotive repair Talisay City",
    "clutch lining Cebu",
    "underchassis repair Lawaan",
  ],
  verification: {
    google: "JDLqRJo0b7rx07pXThjgvCdYPkmD6tRLegp0B_ccv_Y",
  },
  openGraph: {
    title: "Star Brake Bonding Services | Auto Repair in Talisay City, Cebu",
    description:
      "Brake bonding, clutch lining, underchassis, transmission, engine and A/C repair in Lawaan I, Talisay City, Cebu.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
