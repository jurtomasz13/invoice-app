import "@/styles/globals.scss";

import { League_Spartan } from "next/font/google";

import Sidebar from "@/components/Navbar/Navbar";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import { getCookie } from "@/utils/server/cookies";

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
  const theme = getCookie("theme");

  return (
    <html lang="en" data-theme={theme}>
      <body className={leagueSpartan.className}>
        <ThemeContextProvider theme={theme}>
          <Sidebar />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
