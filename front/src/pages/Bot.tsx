import { useState } from "react";
import Elemets from "../components/Buttons/Elemets";

import { Box, Button, Stack, Text, useDisclosure } from "@chakra-ui/react";

import Items from "../components/Items/Items";
import ContainerWrapper from "../components/Wrapper/ContainerWrapper";
import { ItemSelector } from "../types/ItemSelector";
import BasicModal from "../components/Modal/BasicModal";
import useUserStore from "../store/userStore";
import Loading from "../components/Loader/Loading";
import UsernameContainer from "../components/UI/UsernameContainer";

const getRandomChoice = () => {
  const choices = Object.values(ItemSelector);
  const randomChoice = choices[
    Math.floor(Math.random() * choices.length)
  ] as ItemSelector;
  return randomChoice;
};

const Bot = () => {
  const {
    username,
    searchUser,
    setSearchUser,
    userScore,
    setUserScore,
    opponentScore,
    setOpponentScore,
  } = useUserStore();
  const [playerChoice, setPlayerChoice] = useState<ItemSelector | undefined>(
    undefined
  );
  const [botChoice, setBotChoice] = useState<ItemSelector | undefined>(
    undefined
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePlayerChoice = (choice: ItemSelector) => {
    onOpen();
    setPlayerChoice(choice);
    const randomChoice = getRandomChoice();
    setBotChoice(randomChoice);
    const winner = determineWinner(choice, randomChoice);
    if (winner === "You win!") {
      setUserScore(); // Increment the score when the player wins
    }
    if (winner === "You loss!") {
      setOpponentScore(); // Increment the score when the player wins
    }
  };

  const determineWinner = (
    playerChoice: ItemSelector,
    botChoice: ItemSelector
  ) => {
    if (playerChoice === botChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === ItemSelector.Rock &&
        botChoice === ItemSelector.Scissors) ||
      (playerChoice === ItemSelector.Paper &&
        botChoice === ItemSelector.Rock) ||
      (playerChoice === ItemSelector.Scissors &&
        botChoice === ItemSelector.Paper)
    ) {
      return "You win!";
    } else {
      return "You loss!";
    }
  };

  const playAgain = () => {
    onClose();
    setPlayerChoice(undefined);
    setBotChoice(undefined);
  };
  const search = () => {
    setSearchUser(true);
    setTimeout(() => {
      setSearchUser(false);
    }, 1000);
  };
  // console.log(score);

  return (
    <ContainerWrapper>
      <Box pos={"absolute"} top={30} left={0}>
        <UsernameContainer username={"Bot"} score={opponentScore} />
      </Box>
      <Box pos={"absolute"} bottom={130} left={0}>
        <UsernameContainer username={username} score={userScore} />
      </Box>
      <Elemets selectedItem={playerChoice} setSelected={handlePlayerChoice} />

      <Text fontSize="3xl" mt={4}>
        Select choice
      </Text>

      {botChoice && (
        <Box pos={"absolute"} top={100}>
          <Items selector={botChoice}></Items>
        </Box>
      )}
      {playerChoice !== undefined && (
        <Box pos={"absolute"} bottom={150}>
          <Items selector={playerChoice}></Items>
        </Box>
      )}

      <BasicModal isOpen={isOpen} onClose={onClose}>
        {!searchUser && playerChoice && botChoice && (
          <>
            <Text>{determineWinner(playerChoice, botChoice)}</Text>
            <Stack direction={"row"}>
              <Button mt={4} onClick={playAgain}>
                Play Again
              </Button>
              <Button mt={4} onClick={search}>
                Search player
              </Button>
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

export default Bot;
