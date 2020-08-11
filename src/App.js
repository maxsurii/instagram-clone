import React,  { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';


function App() {

  const [posts, setPosts] = useState([
    {
      userName: "Suri",
      caption: "Wow it works",
      imageUrl:
        "https://scontent.fsyd3-1.fna.fbcdn.net/v/t1.0-9/117116874_1018723381892569_5721145167485563021_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=8lVMJXYOVcsAX9KYN4a&_nc_ht=scontent.fsyd3-1.fna&oh=b6cd0979e7c8e259ee99b1a698bbb064&oe=5F58678D",
    },
    {
      userName: "Aeroplane",
      caption: "NBC OImage",
      imageUrl:
        "https://nbc.yepbooking.com.au/userfiles/header/logo-mobile.png",
    },
  ]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      // Everytime new post is added this will triggered
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, [posts])

  return (
    <div className="app">
      {/** Header */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
        />
      </div>
      {/** Posts */}
      {posts.map(post => (
         <Post
         userName={post.userName}
         caption={post.caption}
         imageUrl={post.imageUrl}
       />
      ))}
    </div>
  );
}

export default App;
