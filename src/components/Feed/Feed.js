import React, {useState, useEffect} from 'react';
import './Feed.css';

import { Divider } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FlipMove from 'react-flip-move';

import TweetBox from './TweetBox/TweetBox';
import Post from './Post/Post';

import db from '../../firebase';

export default function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    return (
        <div className="feed">
            <div className="feed-header">
                <h2>Home</h2>
            </div>

            <TweetBox />
            <Divider />
            {(posts.length > 0) ? 
                <FlipMove>
                    {posts.map(post => (
                        <Post 
                            key={post.data.id}
                            displayName={post.data.displayName} 
                            username={post.data.username} 
                            verified={post.data.verified}
                            text={post.data.text}
                            avatar={post.data.avatar}
                            image={post.data.image}
                            postId={post.id}
                        />
                    ))}
                </FlipMove> 
                : 
                <div className="empty-feed-container">
                    <TwitterIcon className="empty-feed-icon" />
                    <h3>Thers is no new tweets</h3>    
                </div>
            }
            
        </div>
    )
}
