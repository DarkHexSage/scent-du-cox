import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scent du Cox | Perfumería Costa Rica",
  description: "Tu perfumería en Costa Rica. Fragancias originales para hombre y mujer. Envíos a todo el país.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
