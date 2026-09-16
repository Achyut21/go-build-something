import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-bricolage",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acing your first hackathon: advice I'd give my younger self",
  description: "You cannot lose this. Go build something.",
  authors: [{ name: "Achyut Katiyar", url: "https://www.achyutkatiyar.com/" }],
  openGraph: {
    title: "Acing your first hackathon: advice I'd give my younger self",
    description: "You cannot lose this. Go build something.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#12101f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
