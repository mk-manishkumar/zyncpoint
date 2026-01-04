import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ZyncPoint - The Zync Point for Your Next Digital Breakthrough",
  description: "Transform your vision into high-performance digital solutions with ZyncPoint. Expert web development, AI integration, consultancy, and cloud infrastructure.",
  keywords: ["web development", "AI solutions", "cloud deployment", "tech consultancy", "digital transformation"],
  authors: [{ name: "Manish Kumar" }],
  openGraph: {
    title: "ZyncPoint - Creative Web Development & AI Solutions",
    description: "Bridge complex challenges with cutting-edge technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
