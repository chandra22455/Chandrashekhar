import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Chandra | Portfolio",
  description: "Developer • Blogger • Creator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

