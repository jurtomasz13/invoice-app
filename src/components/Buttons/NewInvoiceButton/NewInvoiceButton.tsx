import PlusIcon from "@/components/Icons/PlusIcon/PlusIcon";

import Button from "../Button";
import styles from "./NewInvoiceButton.module.scss";

type NewInvoiceButtonProps = {
  handleClick: () => void;
};

const NewInvoiceButton = ({ handleClick }: NewInvoiceButtonProps) => {
  return (
    <Button
      className={styles.button}
      onClick={handleClick}
      aria-label="Create an invoice"
    >
      <div className={styles["plus-wrapper"]}>
        <PlusIcon />
      </div>
      New Invoice
    </Button>
  );
};

export default NewInvoiceButton;
