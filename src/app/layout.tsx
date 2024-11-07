import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Homepage",
  description: "SLTMobitel Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light"> 
    {/* can add dark if needed */}
      <body>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
