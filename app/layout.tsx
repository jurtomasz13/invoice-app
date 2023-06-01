import "@/styles/globals.css";

import Sidebar from "@/components/Navbar/Navbar";

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
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
