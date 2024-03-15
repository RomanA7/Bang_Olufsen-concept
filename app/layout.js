import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { Providers } from "./redux/Providers";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bang & Olufsen Concept",
  description: "Bang & Olufsen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
      <Providers>
        <Nav />        
          {children}
        </Providers>
      </body>
    </html>
  );
}
