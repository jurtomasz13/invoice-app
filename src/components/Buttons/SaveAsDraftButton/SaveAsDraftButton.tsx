import Button from "../Button";
import styles from "./SaveAsDraftButton.module.scss";

type SaveAsDraftButtonProps = {
  handleClick: () => void;
};

const SaveAsDraftButton = ({ handleClick }: SaveAsDraftButtonProps) => {
  return (
    <Button
      className={styles.button}
      onClick={handleClick}
      aria-label="Save as Draft"
    >
      Save as Draft
    </Button>
  );
};

export default SaveAsDraftButton;
