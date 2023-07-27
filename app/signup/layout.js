import Box from "@/components/Box";
import { Container } from "@/components/Container";

export default function Layout({ children }) {
  return (
    <Container>
      <Box className="max-w-[600px] mx-auto">
        <Box className="font-semibold text-2xl mb-10">Sign up</Box>
        {children}
      </Box>
    </Container>
  );
}
