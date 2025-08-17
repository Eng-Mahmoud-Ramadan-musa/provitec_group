import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Provitec Group",
  description: "Provitec Group, Elevators, Conditioning, Security, Maintenance, Repair, Installation, Design, Construction, Projects, Services, Products, Suppliers, Clients, Partners, Team, Contact, About, Philosophy, Industries, Retail & E-Commerce, Information Technology, Finance & Insurance, Projects, Services, Products, Suppliers, Clients, Partners, Team, Contact, About, Philosophy, Industries, Retail & E-Commerce, Information Technology, Finance & Insurance",
  keywords: [
    "Provitec Group",
    "Elevators",
    "Conditioning",
    "Security",
    "Maintenance",
    "Repair",
    "Installation",
    "Design",
    "Construction",
    "Projects",
    "Services",
    "Products",
    "Suppliers",
    "Clients",
    "Partners",
    "Team",
    "Contact",
    "About",
    "Philosophy",
    "Industries",
    "Retail & E-Commerce",
    "Information Technology",
    "Finance & Insurance",
  ],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
