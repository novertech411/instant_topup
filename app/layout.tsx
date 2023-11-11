import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJaka = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-Plus-Jakarta-Sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
