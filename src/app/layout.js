import "./globals.css";

export const metadata = {
  title: "Mitali Cricket Academy",
  description:
    "Professional cricket coaching, training programs, facilities and stadium booking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}