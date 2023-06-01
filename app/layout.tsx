import "@/styles/globals.css";

import { League_Spartan } from "next/font/google";

import Sidebar from "@/components/Navbar/Navbar";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "700"],
});

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
    <html lang="en" className={leagueSpartan.className}>
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
