import React, {forwardRef} from 'react';
import './Post.css';

import { Avatar } from '@material-ui/core';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

import Menu from '../../../Menu';

const Post = forwardRef(({ displayName, username, verified, text, image, avatar, postId }, ref) => {

    return (
        <div className="post" ref={ref}>
            <div className="post-avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-headerWrapper">
                        <div className="post-headerText">
                            <h3>{displayName} {" "}
                                { verified && <VerifiedUserIcon className="post-badge" /> }
                                {" "}
                            </h3>
                            <span className="post-headerSpecial">
                                @{username}
                            </span>
                        </div>
                        <Menu postId={postId} />
                    </div>
                    <div className="post-postDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
});

export default Post;