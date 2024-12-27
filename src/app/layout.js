import "./styles/globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Aayush Sood",
  description: "Aayush Sood's Portfolio",
  creator: "Aayush Sood",
  keywords: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
