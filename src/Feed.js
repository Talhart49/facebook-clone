import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {/* {MessageSender} */}
    </div>
  );
}

export default Feed;
