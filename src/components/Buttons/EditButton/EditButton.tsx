import Button from "../Button";
import styles from "./EditButton.module.scss";

type EditButtonProps = {
  handleClick: () => void;
};

const EditButton = ({ handleClick }: EditButtonProps) => {
  return (
    <Button className={styles.button} onClick={handleClick} aria-label="Edit">
      Edit
    </Button>
  );
};

export default EditButton;
