import Box from "@/components/Box";
import { Container } from "@/components/Container";
import { LinkButton } from "@/components/LinkButton";
import Image from "next/image";

export default function Page() {
  return (
    <Box>
      <Container className="flex items-center h-[600px]">
        <Box className="flex-1">
          <Box>
            <Box className="font-semibold text-5xl">Todo app</Box>
            <LinkButton className="btn-primary mt-5" href="/signup">
              Sign up
            </LinkButton>
          </Box>
        </Box>
        <Box className="flex flex-1 place-content-center">
          <Image src="/hero.svg" alt="Painting" height={600} width={600} />
        </Box>
      </Container>
      <Box className="py-10 bg-neutral-200">
        <Container>Features</Container>
      </Box>
    </Box>
  );
}
