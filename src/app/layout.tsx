import type { Metadata } from "next";
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
        <main>{children}</main>
      </body>
    </html>
  );
}
