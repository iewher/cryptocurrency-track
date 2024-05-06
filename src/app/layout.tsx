import type { Metadata } from "next";

import Header from "@/components/header";
import "./globals.scss";
import Footer from "@/components/footer";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
