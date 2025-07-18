import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awais Dev",
  description: "Created with Awais",
  generator: "Awais.dev",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
