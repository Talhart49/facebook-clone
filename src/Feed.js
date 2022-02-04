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

  // const query = collection(db, "posts")
  //   .get()
  //   .then((querySnapshot) => {
  //     if (querySnapshot.empty) {
  //       console.log("No matching documents.");
  //       return;
  //     }

  //     querySnapshot.forEach((doc) => {
  //       if (doc.exists) {
  //         console.log(doc);
  //         // set((prevFiles) => [
  //         //   ...prevFiles,
  //         //   {
  //         //     id: doc.data().id,
  //         //     data: doc.data(),
  //         //   },
  //         // ]);
  //       } else {
  //         console.log("nothing");
  //       }
  //       // doc.data() is never undefined for query doc snapshotsconsole.log(doc.id, " => ", doc.data());
  //     });
  //   })
  //   .catch((error) => {
  //     console.log("Error getting documents: ", error);
  //   });

  // useEffect(() => {
  //   collection(db, "posts")
  //     .get()
  //     .then((res) => {
  //       console.log("Results: ", res);
  //     });
  //   // setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
  //   // });
  // }, []);

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      {/* {posts.map((post) => ( */}
      <Post
        profilePic='https://www.cnet.com/a/img/DWFo97fm8tyxxvVX-g-mIDF3uiA=/940x0/2020/12/04/9270d8b9-c54e-4528-9886-a3193c300888/game-of-thrones-house-of-the-dragon-concept-art-1247454.jpg'
        message='Look at this Duuuude'
        // timestamp=''
        username='ranatalha'
        image='https://pbs.twimg.com/media/EoVcSwFUwAAaJEa.jpg'
      />
      {/* ))} */}

      <Post
        profilePic='https://i.insider.com/5f778d302400440019129c6a?width=700'
        message='Spider Man Spider Man'
        // timestamp=''
        username='spoiderMan'
        image='https://i.ytimg.com/vi/FYkmt5YtH_I/maxresdefault.jpg'
      />

      <Post
        profilePic='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2021_16/1705556/elizabeth-olsen-nc-main-042121.jpg'
        message='UWU'
        // timestamp=''
        username='CutiePie'
        image='https://i.insider.com/60491083f196be0018bee9db?width=750&format=jpeg&auto=webp'
      />
    </div>
  );
}

export default Feed;
