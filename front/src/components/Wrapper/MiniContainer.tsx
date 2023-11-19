import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
const MiniContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        minW="300px"
        p="6"
        borderWidth="1px"
        borderRadius="md"
      >
        {children}
      </Box>
    </>
  );
};

export default MiniContainer;
