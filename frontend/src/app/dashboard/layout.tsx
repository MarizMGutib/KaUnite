import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <SessionWrapper>{children}</SessionWrapper>
        </Suspense>
      </body>
    </html>
  );
}
