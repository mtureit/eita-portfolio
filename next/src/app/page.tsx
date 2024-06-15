import Image from "next/image";
import styles from "./page.module.scss";
import TypingEffect from './_components/TypingEffect'

export default function Home() {
  return (
    <main>
      <p className={styles.title}>aaa</p>
      <TypingEffect />
    </main>
  );
}
