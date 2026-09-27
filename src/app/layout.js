import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="dark"
          />
        </FitLogProvider>
      </body>
    </html>
  );
}
