"use client";

import styles from "./timeline.module.css";
import { useState } from "react";
import TimelinePost from "@/components/TimelinePost";
import IconButton from "@/components/IconButton";

export default function Page(props) {
  const [liked, setLiked] = useState(false);
  const [commenting, setCommenting] = useState(false);
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const saveComment = () => {
    setComments([...comments, message]);
    setCommenting(true);
    setMessage("");
  };
  return (
    <div>
      <div className={styles.newPost}>
        <IconButton
          width={32}
          height={32}
          unactiveImage="/icons/plus-small.svg"
          onClick={() => TimelinePost}
        ></IconButton>
      </div>
      <TimelinePost
        liked={liked}
        setLiked={setLiked}
        setCommenting={setCommenting}
        commenting={commenting}
        onInputChange={(event) => setMessage(event.target.value)}
        onSaveComment={saveComment}
        comments={comments}
      ></TimelinePost>
    </div>
  );
}
