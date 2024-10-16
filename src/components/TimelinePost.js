import Image from "next/image";
import IconButton from "./IconButton";
import styles from "./TimelinePost.module.css";
import CommentSection from "./CommentSection";

export default function TimelinePost(props) {
  // function that returns a random username
  function randomUsername() {
    const adjectives = [
      "beautiful",
      "handsome",
      "intelligent",
      "talented",
      "creative",
      "kind",
      "compassionate",
      "caring",
      "adventurous",
      "curious",
      "helpful",
      "supportive",
      "encouraging",
      "encouraging",
    ];
    const nouns = [
      "cat",
      "dog",
      "bird",
      "fish",
      "rabbit",
      "bear",
      "wolf",
      "fox",
      "monkey",
      "tiger",
      "elephant",
      "lion",
      "shark",
    ];
    return (
      adjectives[Math.floor(Math.random() * adjectives.length)] +
      " " +
      nouns[Math.floor(Math.random() * nouns.length)]
    );
  }
  return (
    <>
      <div className={styles.postContainer}>
        <Image
          className={styles.avatar}
          src="https://i.pinimg.com/originals/04/7d/31/047d31ae8c50cf36a81927b14ebc948b.png"
          width={200}
          height={300}
          alt="user avatar"
        />
        <div className={styles.column}>
          <div className={styles.account}>{randomUsername()}</div>
          <div className={styles.content}>{props.post}</div>
          <div className={styles.reaction}>
            <IconButton
              width={16}
              height={16}
              clicked={() => props.setLiked(!props.liked)}
              active={props.liked}
              activeImage="/icons/heart-full.svg"
              unactiveImage="/icons/heart.svg"
            />
            <IconButton
              width={16}
              height={16}
              unactiveImage="/icons/share.svg"
            />
            <IconButton
              width={16}
              height={16}
              clicked={() => props.setCommenting(!props.commenting)}
              unactiveImage="/icons/comment-alt.svg"
            />
          </div>
        </div>
      </div>
      <CommentSection {...props}></CommentSection>
    </>
  );
}
