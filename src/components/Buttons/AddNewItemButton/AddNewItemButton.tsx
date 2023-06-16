import Button from "../Button";
import styles from "./AddNewItemButton.module.scss";

type AddNewItemButtonProps = {
  handleClick: () => void;
};

const AddNewItemButton = ({ handleClick }: AddNewItemButtonProps) => {
  return (
    <Button
      className={styles.button}
      onClick={handleClick}
      aria-label="Add new item"
    >
      + Add New Item
    </Button>
  );
};

export default AddNewItemButton;
