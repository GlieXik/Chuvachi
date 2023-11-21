import { Box, Text } from "@chakra-ui/react";

const UsernameContainer = ({
  username,
  score,
}: {
  username: string;
  score: number;
}) => {
  return (
    <Box p={4} bg={"blackAlpha.300"} borderRadius="lg">
      <Text>
        {username} {score}
      </Text>
    </Box>
  );
};
export default UsernameContainer;
