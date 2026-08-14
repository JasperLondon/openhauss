import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "openhauss — The Intelligent Real Estate Platform",
  description:
    "Find, buy, sell, or rent your dream home with AI-powered insights, verified listings, and a seamless digital closing experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
