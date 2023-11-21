import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ContainerWrapper from "../components/Wrapper/ContainerWrapper";

import MiniContainer from "../components/Wrapper/MiniContainer";
import { Input } from "@chakra-ui/react";
import Logo from "../components/Logo/Logo";
import useUserStore from "../store/userStore";
import BasicModal from "../components/Modal/BasicModal";
import Loading from "../components/Loader/Loading";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const { username, setUsername, searchUser, setSearchUser } = useUserStore();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [playWithBot, setPlayWithBot] = useState<boolean>(false);

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
  };

  const start = () => {
    onOpen();
    setSearchUser(true);
    handleLoading();
  };
  useEffect(() => {
    setTimeout(() => {
      setPlayWithBot(true);
    }, 1000);
  }, []);
  const handleLoading = () => {
    // Add logic here to handle the "Again" action, e.g., restart the search
    setPlayWithBot(false);
    setTimeout(() => {
      setSearchUser(false);
      setPlayWithBot(true);
    }, 1000);
    // Additional logic as needed
  };
  return (
    <ContainerWrapper>
      <Logo />
      <Box>
        <MiniContainer>
          <Flex alignItems={"center"} flexDirection={"column"} gap={7}>
            <Input placeholder="Username" size="md" onChange={handleUsername} />
            <Box>
              <Button size="md" isDisabled={!username} onClick={start}>
                Let's go
              </Button>
            </Box>
          </Flex>
        </MiniContainer>
      </Box>
      <BasicModal isOpen={isOpen} onClose={onClose}>
        {playWithBot && (
          <>
            <Text mb={3}>Playing with Bot</Text>
            <Stack direction="row" justifyContent="space-around">
              <Link to="/bot">
                <Button>Go</Button>
              </Link>
              <Button onClick={start}>Again</Button>
            </Stack>
          </>
        )}
        {searchUser && (
          <>
            <Loading /> <Text>Searching opponent</Text>
          </>
        )}
      </BasicModal>
    </ContainerWrapper>
  );
};

export default Login;
