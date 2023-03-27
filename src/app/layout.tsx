import "../styles/globals.css";

export const metadata = {
  description: "Manage invoices",
  title: "Invoices",
};

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
