import type { Metadata } from "next";
import "../index.css";
import { LangProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🇨🇦</text></svg>",
  },
  title: "NNM Import & Export Inc",
  description: "A federally incorporated Canadian company empowering businesses through reliable trade of consumer goods between Vietnam and Canada.",
  authors: [{ name: "NNM Import & Export Inc" }],
  openGraph: {
    type: "website",
    title: "NNM Import & Export Inc",
    description: "A federally incorporated Canadian company empowering businesses through reliable trade of consumer goods between Vietnam and Canada.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NNM Import & Export Inc",
    description: "A federally incorporated Canadian company empowering businesses through reliable trade of consumer goods between Vietnam and Canada.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
