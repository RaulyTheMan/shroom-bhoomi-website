import localFont from "next/font/local";

export const metropolis = localFont({
  src: [
    { path: "../fonts/metropolis/metropolis-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/metropolis/metropolis-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/metropolis/metropolis-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/metropolis/metropolis-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-metropolis-raw",
  display: "swap",
});

export const chelseaMarket = localFont({
  src: "../fonts/chelsea-market/chelsea-market-400.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-chelsea-market-raw",
  display: "swap",
});
