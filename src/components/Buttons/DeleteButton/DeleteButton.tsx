import Button from "../Button";
import styles from "./DeleteButton.module.scss";

type DeleteButtonProps = {
  handleClick: () => void;
};

const DeleteButton = ({ handleClick }: DeleteButtonProps) => {
  return (
    <Button className={styles.button} onClick={handleClick} aria-label="Delete">
      Delete
    </Button>
  );
};

export default DeleteButton;
