import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProvidersWrappers from "@/components/providerWrappers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KaUnite",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="font-poppins">
        <ProvidersWrappers>{children}</ProvidersWrappers>
      </body>
    </html>
  );
}
