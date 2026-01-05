import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Unique Greek Tours | Authentic Peloponnese Adventures",
  description: "Experience the real Peloponnese with authentic tours led by local experts from Argos. Discover UNESCO World Heritage Sites, traditional villages, and hidden gems of mainland Greece.",
  keywords: "Greece tours, Peloponnese tours, Nafplio tours, Mycenae, Epidaurus, Olympia, Greek adventures, authentic Greece, cultural tours, archaeological tours, Argos tours",
  openGraph: {
    title: "Unique Greek Tours | Authentic Peloponnese Adventures",
    description: "Experience the real Peloponnese with authentic tours led by local experts.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
