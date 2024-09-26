import styles from "./timeline.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <div className={styles.timeline}>
      <Image
        className={styles.avatar}
        src="https://i.pinimg.com/originals/04/7d/31/047d31ae8c50cf36a81927b14ebc948b.png"
        width={200}
        height={300}
        alt="user avatar"
      />
      <div className={styles.column}>
        <div className={styles.account}>Generic Name</div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet. Sit eius aliquid aut atque mollitia eum
          placeat nihil ut alias itaque sed autem dolorem. Qui sunt vero vel
        </div>
        <div className={styles.reaction}>
          <button>Like</button>
          <button>comment</button>
          <button>share</button>
        </div>
      </div>
    </div>
  );
}
