import type { Metadata } from "next";

import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Cryptocurrency-track",
  description: "Вебсайт для отслеживания криптовалюты",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
