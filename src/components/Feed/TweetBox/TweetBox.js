import React, {useState} from 'react';
import './TweetBox.css';

import { Avatar, Button, IconButton, Tooltip } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import EventIcon from '@material-ui/icons/Event';

import db from '../../../firebase';

export default function TweetBox({ handleClose }) {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        let tweetBox = document.getElementById('tweetBox');

        if(!tweetMessage) {
            tweetBox.style.border = "1px solid red";
        } else {
            tweetBox.style.border = "1px solid var(--twitter-background)";
            
            db.collection('posts').add({
                displayName: 'Ayham Qadi',
                username: 'ayham2005',
                verified: true,
                text: tweetMessage,
                image: tweetImage,
                avatar: 'https://avatars.githubusercontent.com/u/61696257?v=4'
            });
    
            setTweetMessage("");
            setTweetImage("");
        }

    }

    return (
        <div className="tweetBox" id="tweetBox">
            <form>
                <div className="tweetBox-input">
                    <Avatar src="https://avatars.githubusercontent.com/u/61696257?v=4" />
                    <input 
                        value={tweetMessage} 
                        onChange={(e)=> setTweetMessage(e.target.value)} 
                        placeholder="What's happening?" 
                        type="text" 
                        id="tweetMessage"
                    />
                </div>
                <input 
                    value={tweetImage}
                    onChange={(e)=> setTweetImage(e.target.value)}
                    className="tweetBox-imageInput" 
                    placeholder="Optional: Enter image URL" 
                    type="text" 
                />
                <div className="tweetBox-footer">
                    <div className="tweetBox-footer-Icons">
                        <Tooltip title="Media">
                            <IconButton>
                                <ImageIcon className="footer-icon" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="GIF">
                            <IconButton>
                                <GifIcon className="footer-icon" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Poll">
                            <IconButton>
                                <PollIcon className="footer-icon" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Emoji">
                            <IconButton>
                                <InsertEmoticonIcon className="footer-icon" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Schedule">
                            <IconButton>
                                <EventIcon className="footer-icon" />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <Button type="submit" onClick={sendTweet} className="tweetBox-button">Tweet</Button>
                </div>
            </form>
        </div>
    )
}
