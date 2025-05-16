import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReactQueryProvider from "@/components/providers/react-query-provider";
import Navigation from "@/components/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mind Positron",
  description: "Application with Supabase, Prisma, and Stripe integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <div className="min-h-screen flex flex-col">
            {/* Navigation will be included on all pages */}
            <div className="flex-none">
              <Navigation />
            </div>
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
