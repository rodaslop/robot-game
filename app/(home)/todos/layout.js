import Box from "@/components/Box";
import Navbar from "./Navbar";

export default async function Layout({ children }) {
  return (
    <Box className="max-w-[800px] mx-auto">
      <Navbar />
      <Box className="mt-5">{children}</Box>
    </Box>
  );
}
