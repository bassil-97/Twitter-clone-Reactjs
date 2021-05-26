import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import TweetBox from '../Feed/TweetBox/TweetBox';

import './TwitterDialog.css';

export default function ResponsiveDialog({ open, handleClose }) {
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <div>
      <Dialog
        className="twitter-dialog"
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
      >
        <TweetBox handleClose={handleClose} />
      </Dialog>
    </div>
  );
}
