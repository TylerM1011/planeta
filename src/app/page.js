"use client";

import { useState } from "react";
import TimelinePost from "@/components/TimelinePost";

export default function Page() {
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
      <TimelinePost
        liked={liked}
        setLiked={setLiked}
        setCommenting={setCommenting}
        commenting={commenting}
        onInputChange={(event) => setMessage(event.target.value)}
        onSaveComment={saveComment}
        comments={comments}
      ></TimelinePost>
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
