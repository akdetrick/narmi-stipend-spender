"use client";
import { AppProvider } from "./context/context";
import "@narmi/design_system/dist/style.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#F4F6F5" }}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
