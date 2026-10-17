import "@fontsource-variable/inter";
import "@fontsource-variable/inter/wght-italic.css";
import "@fontsource/source-serif-4/400-italic.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/600.css";
import "./globals.css";
import { brand } from "../lib/content";
import { organizationSchema, websiteSchema } from "../lib/schema";
import JsonLd from "../components/JsonLd";

export const metadata = {
  metadataBase: new URL("https://dotstory.io"),
  title: {
    default: `${brand.name} — Organic & Paid Growth for B2B Tech Companies`,
    template: `%s | ${brand.name}`,
  },
  description:
    "We build organic and paid growth for tech companies above $10M ARR — brand, SEO/AEO/GEO, programmatic and paid media, planned and run end to end.",
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
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body>{children}</body>
    </html>
  );
}
