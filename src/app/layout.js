import { monserrat } from "./fonts";
import "./../../styles/css/main.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
