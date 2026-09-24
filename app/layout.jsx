import "@fontsource-variable/inter";
import "@fontsource-variable/inter/wght-italic.css";
import "@fontsource/source-serif-4/400-italic.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/600.css";
import "./globals.css";
import { brand } from "../lib/content";

export const metadata = {
  title: `${brand.name} | Programmatic Advertising Agency`,
  description:
    "We set up and run DV360 programmatic campaigns end to end, so every impression works harder.",
};

export const viewport = {
  themeColor: "#EFEDE9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Show content even if JavaScript is disabled */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
