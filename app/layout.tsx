import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peter Medhat | SoFtWaRe DeVeLoPeR ",
  description: "الموقع الشخصي لـ Peter Medhat، مطور برمجيات ومهندس حلول رقمية.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
