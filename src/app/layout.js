import "./globals.css";

// fonts
import { inter } from "@/app/fonts";

// components
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PaulDevCodes",
  description: "PaulDevCodes Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header />
          {children}
          <Contact />
          <Footer />
        </main>
      </body>
    </html>
  );
}
