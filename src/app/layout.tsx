import type { Metadata } from "next";
import { metropolis, chelseaMarket } from "@/lib/fonts";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shroom Bhoomi — Fresh Mushrooms Straight From The Farm",
  description:
    "Locally grown and sourced gourmet mushrooms, delivered fresh across kitchens and cuisines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${metropolis.variable} ${chelseaMarket.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-metropolis">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
