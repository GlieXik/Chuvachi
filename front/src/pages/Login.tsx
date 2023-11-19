import { Box, Button, Flex } from "@chakra-ui/react";
import ContainerWrapper from "../components/Wrapper/ContainerWrapper";

import MiniContainer from "../components/Wrapper/MiniContainer";
import { Input } from "@chakra-ui/react";
import Logo from "../components/Logo/Logo";
import useUserStore from "../store/userStore";
const Login = () => {
  const { username, setUsername } = useUserStore();
  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
  };
  return (
    <ContainerWrapper>
      <Logo />
      <Box>
        <MiniContainer>
          <Flex alignItems={"center"} flexDirection={"column"} gap={7}>
            <Input placeholder="Username" size="md" onChange={handleUsername} />
            <Box>
              <Button size="md" isDisabled={!username}>
                Let's go
              </Button>
            </Box>
          </Flex>
        </MiniContainer>
      </Box>
    </ContainerWrapper>
  );
};

export default Login;
