import { AuthProvider } from "@/contexts/auth";

export default function Providers({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
