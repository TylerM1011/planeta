import Link from "next/link";
import styles from "./games.module.css";

export default function Games() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/games/matching-game">
        Matching Game
      </Link>
    </div>
  );
}
