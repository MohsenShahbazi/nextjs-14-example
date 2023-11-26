import type { Metadata } from "next";

import localFont from "next/font/local";

import "./globals.css";

export const metadata: Metadata = {
  title: "NextJs 14",
  description: "Next js 14 Crash Course",
};

const vazirFont = localFont({
  src: "../public/font/fonts/webfonts/Vazirmatn-Regular.woff2",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={` bg-slate-600 text-white ${vazirFont.className}`}>
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
}
