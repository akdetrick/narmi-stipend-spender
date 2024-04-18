import "@narmi/design_system/dist/style.css";
import "./globals.css";

export const metadata = {
  title: "Narmi Stipend Spender",
  description: "Stipend Inspo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
