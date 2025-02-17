import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import SubNav from "@/components/organisms/forms/SubNav";

// Load local fonts
const fakeReceipt = localFont({
  src: "./fonts/LOCAVORE-WEB-FONTS/fake-receipt_woff/fake-receipt.woff",
  variable: "--font-fake-receipt",
  weight: "400",
  style: "normal",
});
const arialRounded = localFont({
  src: "./fonts/LOCAVORE-WEB-FONTS/LT-Arial-Rounded-Bold/Fonts/903436/e21820f0-ed6c-4236-895c-9d164babebc0.woff",
  variable: "--font-arial-rounded",
  weight: "700",
  style: "normal",
});
const ppNeueMontreal = localFont({
  src: [
    {
      path: "./fonts/LOCAVORE-WEB-FONTS/PPNeueMontreal-Regular-v2.4/PPNeueMontreal-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/LOCAVORE-WEB-FONTS/PPNeueMontreal-Medium-v2.4/PPNeueMontreal-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-pp-neue-montreal",
});

// Define metadata
export const metadata: Metadata = {
  title: "The Locavore | View-Source Demo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Add fonts variables to the body element
        className={`${fakeReceipt.variable} ${arialRounded.variable} ${ppNeueMontreal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
