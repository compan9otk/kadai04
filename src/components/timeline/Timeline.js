import { React, useEffect, useState } from 'react';
import Post from './Post';
import './Timeline.css';
import TweetBox from './TweetBox';
import db from '../../firebase';
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import FlipMove from 'react-flip-move';

function Timeline() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, 'posts');
    const q = query(postData, orderBy('timestamp', 'desc'))

    //リアルタイムでテータを取得
    onSnapshot(q, (querySnapshots) => {
      setPosts(querySnapshots.docs.map( doc => doc.data()));
    });
  }, []);

  return (
    <div className='timeline'>
        {/* Header */}
        <div className='timeline__header'>
            <h2>ホーム</h2>
        </div>
        {/* TweetBox */}
        <TweetBox />
        {/* Post */}
        <FlipMove>
          {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
          ))}
        </FlipMove>
    </div>
  )
}

export default Timeline