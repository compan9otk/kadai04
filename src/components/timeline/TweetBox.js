import { Avatar, Button } from '@material-ui/core';
import { React, useState } from 'react';
import './TweetBox.css';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from '../../firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    // firebaseのデータベースに追加する
    e.preventDefault();

    addDoc(collection(db, 'posts'),{
      displayName: 'otk',
      userName: 'otk_gs23',
      verified: true,
      text: tweetMessage,
      avatar: 'https://stickershop.line-scdn.net/stickershop/v1/product/18703/LINEStorePC/main.png;compress=true',
      image: tweetImage,
      timestamp: serverTimestamp(),
    });
    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar />
                <input
                  value={tweetMessage}
                  placeholder='いまどうしてる？'
                  type='text'
                  onChange={(e) => setTweetMessage(e.target.value)}
                ></input>
            </div>
            <input
              className='tweetBox__imageInput'
              placeholder='画像のURLを入力してください'
              type='text'
              onChange={(e) => setTweetImage(e.target.value)}
            ></input>
            <Button
              className='tweetBox__tweetButton'
              type='submit'
              onClick={sendTweet}>
                ツイートする
            </Button>
        </form>
    </div>
  )
}

export default TweetBox