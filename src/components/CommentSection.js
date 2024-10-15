"use client";
import styles from "./CommentSection.module.css";
import IconButton from "./IconButton";
import Image from "next/image";

export default function CommentSection(props) {
  console.log(props);
  return (
    props.commenting && (
      <div className={styles.commentBox}>
        <div className={styles.commentInput}>
          <input onChange={props.onInputChange}></input>
          <IconButton
            width={16}
            height={16}
            unactiveImage="/icons/paper-plane-top.svg"
            clicked={props.onSaveComment}
          ></IconButton>
        </div>
        {props.comments.map((comment, I) => (
          <div className={styles.comment} key={I}>
            <div className={styles.user}>
              <Image
                src="/icons/pfp.svg"
                height={64}
                width={64}
                alt="profile picture"
              ></Image>
              <h1>Username</h1>
            </div>
            <div className={styles.postContent}>{comment}</div>

            <div className={styles.commentReaction}>
              <IconButton
                width={16}
                height={16}
                clicked={() => props.setLiked(!props.liked)}
                active={props.liked}
                activeImage="/icons/heart-full.svg"
                unactiveImage="/icons/heart.svg"
              />
            </div>
          </div>
        ))}
      </div>
    )
  );
}
