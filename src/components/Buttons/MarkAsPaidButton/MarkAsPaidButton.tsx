import Button from "../Button";
import styles from "./MarkAsPaidButton.module.scss";

type MarkAsPaidButtonProps = {
  handleClick: () => void;
};

const MarkAsPaidButton = ({ handleClick }: MarkAsPaidButtonProps) => {
  return (
    <Button
      className={styles.button}
      onClick={handleClick}
      aria-label="Mark as paid"
    >
      Mark as paid
    </Button>
  );
};

export default MarkAsPaidButton;
