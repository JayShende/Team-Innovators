import styles from "../styles/quotation.module.css";
import { Text } from "@nextui-org/react";

export default function Quotation({ quotation__text, quotation_index }) {
  const quotation = {
    0: [
      "Almost before we knew it, we had left the ground.",
      "A shining crescent far beneath the flying vessel.",
      "A red flair silhouetted the jagged edge of a wing.",
    ],
    1: [
      "A shining crescent far beneath the flying vessel.",
      "A red flair silhouetted the jagged edge of a wing.",
      "Almost before we knew it, we had left the ground.",
    ],
    2: [
      "A red flair silhouetted the jagged edge of a wing.",
      "Almost before we knew it, we had left the ground.",
      "A shining crescent far beneath the flying vessel.",
    ],
  };

  return (
    <>
      <div className={styles.quotation}>
        <div className={styles.quotation__text}>
          <Text color="success">
            {quotation[quotation__text][quotation_index]}
          </Text>
        </div>
      </div>
    </>
  );
}
