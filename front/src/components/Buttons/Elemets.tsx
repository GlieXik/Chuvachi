import { Button, Stack } from "@chakra-ui/react";
import { ItemSelector } from "../../types/ItemSelector";

const Elements = ({
  selectedItem,
  setSelected,
}: {
  selectedItem: ItemSelector | undefined;
  setSelected: (ItemSelector: ItemSelector) => void;
}) => {
  return (
    <Stack
      direction="row"
      spacing={4}
      w={"100%"}
      bg={"blackAlpha.300"}
      justifyContent={"space-between"}
      pos={"absolute"}
      bottom={0}
      padding={2}
      rounded={"lg"}
    >
      <Button
        size="lg"
        w={"33%"}
        height={28}
        colorScheme={selectedItem === ItemSelector.Rock ? "blue" : "gray"}
        onClick={() => setSelected(ItemSelector.Rock)}
      >
        Rock
      </Button>
      <Button
        size="lg"
        w={"33%"}
        height={28}
        colorScheme={selectedItem === ItemSelector.Paper ? "blue" : "gray"}
        onClick={() => setSelected(ItemSelector.Paper)}
      >
        Paper
      </Button>
      <Button
        size="lg"
        w={"33%"}
        height={28}
        colorScheme={selectedItem === ItemSelector.Scissors ? "blue" : "gray"}
        onClick={() => setSelected(ItemSelector.Scissors)}
      >
        Scissors
      </Button>
    </Stack>
  );
};

export default Elements;
