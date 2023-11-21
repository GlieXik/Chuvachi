import { ItemSelector } from "../../types/ItemSelector";

const Items = ({ selector }: { selector: ItemSelector }) => {
  let imagePath;

  switch (selector) {
    case ItemSelector.Rock:
      imagePath = "/Images/Rock.png";
      break;
    case ItemSelector.Paper:
      imagePath = "/Images/Paper.png";
      break;
    case ItemSelector.Scissors:
      imagePath = "/Images/Scissors.png";
      break;
    default:
      imagePath = "none";
  }

  return <img src={imagePath} alt={selector} />;
};

export default Items;
