import { Poppins } from "next/font/google";
import "../styles/globals.css";

import Navbar from "@/components/navbar/navbar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Chairul An'aam Maulidin",
  description: "portfolio by namassist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-darkest ${poppins.className}`} id="home">
        <Navbar />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
