import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
