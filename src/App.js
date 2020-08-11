import React,  { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';


function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      // Everytime new post is added this will triggered
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
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
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
