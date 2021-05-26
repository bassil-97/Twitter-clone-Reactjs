import React from 'react';
import './Widgets.css';

import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

export default function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets-input">
                <SearchIcon className="widgets-searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets-widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId="1395524425483800577" />
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="Bassil_Qadi"
                    option={{height: 400}}
                />
                <TwitterShareButton 
                    url={"https://github.com/bassil-97/"}
                    options={{ text: "Twitter Clone", via: "Bassil_Qadi" }}
                />
            </div>
        </div>
    )
}
