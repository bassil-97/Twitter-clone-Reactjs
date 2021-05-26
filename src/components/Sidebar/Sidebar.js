import React, {useState} from 'react';
import './Sidebar.css';

import SidebarOption from './SidebarOption/SidebarOption';

import { Button, IconButton } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import TweetDialig from '../TweetDialog/TweetDialog';

export default function Sidebar() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    function handleClose() {
        setOpen(false);
    }

    return (
        <div className="sidebar">
            <IconButton>
                <TwitterIcon className="sidebar-twitterIcon" />
            </IconButton>

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <TweetDialig open={open} handleClose={handleClose} />

            <Button onClick={handleClickOpen} variant="outlined" className="sidebar-tweet" fullWidth>Tweet</Button>
        </div>
    )
}
