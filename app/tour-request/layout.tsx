import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Tour - Book Your Greek Adventure | Unique Greek Tours",
  description: "Request your perfect Greek tour. Fill out our simple form and we'll get back to you within 24 hours with availability and confirmation. Private tours across the Peloponnese and Athens.",
  keywords: "book tour Greece, tour request, Greek tour booking, Peloponnese tours, private tour Greece, Athens tours booking",
  openGraph: {
    title: "Request a Tour - Unique Greek Tours",
    description: "Request your perfect Greek tour with our easy booking form. Quick response within 24 hours.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Tour - Unique Greek Tours",
    description: "Book your Greek adventure. Simple request form with 24-hour response.",
  },
  alternates: {
    canonical: "https://unique-greek-tours-3.vercel.app/tour-request",
  },
};

export default function TourRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
