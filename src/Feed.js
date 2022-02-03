import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  // {
  //   setPosts(
  //     snapshot.docs.map(
  //       (doc) => (
  //         console.log(doc.data()),
  //         {
  //           id: doc.id,
  //           data: doc.data(),
  //         }
  //       )
  //     )
  //   );
  // }

  // const col = collection(db, "posts");

  // useEffect(() => {
  //   const getdata = () => {
  //     const dataa = getDocs(col);
  //     console.log(dataa);
  //     // setPosts(data)
  //   };
  // }, []);

  // useEffect(() => {
  //   const q = doc(collection(db, "posts"));
  //   const unsub = onSnapshot(q, (snapshot) => {
  //     setPosts(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     );
  //   });
  // }, []);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
  //   );
  // }, []);

  useEffect(() => {
    collection(db, "posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
