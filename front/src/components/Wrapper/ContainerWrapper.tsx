import { ReactNode } from "react";
import { Container, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../UI/ColorModeSwitcher";

const ContainerWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <VStack spacing={4} padding={2}>
      <Container maxW="sm" pos={"relative"} centerContent h={"100vh"}>
        <ColorModeSwitcher pos={"absolute"} top={2} right={0} />
        {children}
      </Container>
    </VStack>
  );
};

export default ContainerWrapper;
