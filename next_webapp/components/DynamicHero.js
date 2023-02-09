import { Image } from "@nextui-org/react";
import styles from "../styles/dynamic.module.css";

export default function DynamicHero() {
  return (
    <>
      <Image className={styles.logo} src="logo.png" alt=""></Image>
    </>
  );
}
