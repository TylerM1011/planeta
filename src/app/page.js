"use client";

import styles from "./timeline.module.css";
import { useState } from "react";
import TimelinePost from "@/components/TimelinePost";
import IconButton from "@/components/IconButton";

export default function Page(props) {
  const [posts, setPost] = useState([]);
  const [postInput, setPostInput] = useState("");
  const [liked, setLiked] = useState(false);
  const [commenting, setCommenting] = useState(false);
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const saveComment = () => {
    setComments([...comments, message]);
    setCommenting(true);
    setMessage("");
  };
  const savePost = () => {
    setPost([...posts, postInput]);
    setPostInput("");
  };
  return (
    <div>
      <div className={styles.newPost}>
        <input onChange={(event) => setPostInput(event.target.value)}></input>
        <button type="button" onClick={savePost}>
          New Post
        </button>
      </div>
      {posts.map((post) => {
        return (
          <TimelinePost
            liked={liked}
            setLiked={setLiked}
            setCommenting={setCommenting}
            commenting={commenting}
            onInputChange={(event) => setMessage(event.target.value)}
            onSaveComment={saveComment}
            comments={comments}
            post={post}
          ></TimelinePost>
        );
      })}
    </div>
  );
}
