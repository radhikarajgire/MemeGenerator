import React from 'react';
import { Twitter, Facebook, Whatsapp, Reddit } from 'react-social-sharing';
import './SocialMediaIcons.css';

function SocialMediaIcons() {
  return (
    <div className="SocialMediaWrapper">
      <Twitter
        name={'Twitter'}
        link="https://www.twitter.com"
        style={{ backgroundColor: '#21aa93' }}
      />
      <Facebook
        link="https://www.facebook.com"
        style={{ backgroundColor: '#21aa93' }}
      />
      <Whatsapp style={{ backgroundColor: '#21aa93' }} />
      <Reddit style={{ backgroundColor: '#21aa93' }} />
    </div>
  );
}

export default SocialMediaIcons;
