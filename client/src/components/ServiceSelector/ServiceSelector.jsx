import React from 'react';
import classes from './ServiceSelector.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import YouTubeLogo from '../../../assets/youtube-square.svg';
import GoogleLogo from '../../../assets/google.svg';
import TwitterLogo from '../../../assets/twitter-square.svg';
import TwitchLogo from '../../../assets/twitch.svg';

const serviceSelector = (props) => (
  <div className={classes.loginOptionsRow}>
    <p className={classes.loginChoicePrompt}>
      Choose a service to start with.
    </p>
    {/* {/* <a href="http://localhost:3000/auth/youtube">} */}
    {/* <img src={YouTubeLogo} className={classes.loginYoutube}></img> */}
    {/* </a>*/}
    {/* <img src={GoogleLogo} className={classes.loginGoogle}></img> */}
    {/* <img src={TwitterLogo} className={classes.loginTwitter}></img> */}
    {/* <img src={TwitchLogo} className={classes.loginTwitch}></img> */}
    <a href="http://localhost:3000/auth/youtube">
    <FontAwesomeIcon icon={['fab', 'youtube-square']} listItem size="2x" className={classes.loginYoutube} />
    </a>
    <FontAwesomeIcon icon={['fab', 'google']} listItem size="2x" className={classes.loginGoogle} /> 
    <FontAwesomeIcon icon={['fab', 'twitter']} listItem size="2x" className={classes.loginTwitter} /> 
    <FontAwesomeIcon icon={['fab', 'twitch']} listItem size="2x" className={classes.loginTwitch} /> 
  </div>
);

export default serviceSelector;