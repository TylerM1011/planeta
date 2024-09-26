"use client";
import { useState } from "react";
import styles from "./timeline.module.css";
import Image from "next/image";
import IconButton from "@/components/IconButton";

export default function Page() {
  const [liked, setLiked] = useState(false);
  const [commenting, setCommenting] = useState(false);
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const saveComment = () => {
    setComments([...comments, message]);
    setCommenting(false);
    setMessage("");
  };
  return (
    <div>
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
            <IconButton
              width={16}
              height={16}
              clicked={() => setLiked(!liked)}
              active={liked}
              activeImage="/icons/heart-full.svg"
              unactiveImage="/icons/heart.svg"
            />
            <IconButton
              width={16}
              height={16}
              clicked={() => setCommenting(!commenting)}
              unactiveImage="/icons/comment-alt.svg"
            />
            <IconButton
              width={16}
              height={16}
              unactiveImage="/icons/share.svg"
            />
          </div>
        </div>
      </div>
      {commenting && (
        <div className={styles.commentBox}>
          <input onChange={(event) => setMessage(event.target.value)}></input>
          <IconButton
            width={16}
            height={16}
            unactiveImage="/icons/paper-plane-top.svg"
            clicked={saveComment}
          ></IconButton>
        </div>
      )}
      <div className={styles.comments}>
        {comments.map((comment) => (
          <div>{comment}</div>
        ))}
      </div>
    </div>
  );
}
