import Box from "@/components/Box";
import Sidebar from "./Sidebar";
import { AuthRedirect } from "./AuthRedirect";

export default async function Layout({ children }) {
  return (
    <AuthRedirect>
      <Box className="fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0">
        <Box className="h-full px-3 pb-4 overflow-y-auto">
          <Sidebar />
        </Box>
      </Box>
      <Box className="px-4 sm:ml-60">{children}</Box>
    </AuthRedirect>
  );
}
