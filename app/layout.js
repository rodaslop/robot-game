import "./globals.css";
import Navbar from "./Navbar";
import Box from "@/components/Box";
import Providers from "./Providers";

export const metadata = {
  title: "Todo app",
  description: "Todo list app.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50">
        <Providers>
          <Navbar />
          <Box className="pt-20">{children}</Box>
        </Providers>
      </body>
    </html>
  );
}
