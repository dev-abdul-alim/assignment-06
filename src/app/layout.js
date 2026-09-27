import Navbar from "@/components/nav/foot/page";
import "./globals.css";
import Footer from "@/components/nav/page";
import { FitLogProvider } from "@/context/FitLogProvider/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar />

          {children}

          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}
