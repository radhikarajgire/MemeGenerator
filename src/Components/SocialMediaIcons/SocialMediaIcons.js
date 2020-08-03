import React from "react"
import { Twitter, Facebook, Whatsapp, Mail } from 'react-social-sharing'
import "./SocialMediaIcons.css"


function SocialMediaIcons() {
    return (
            <div className="SocialMediaWrapper">
                <Twitter name={"Tweet"} link="https://www.twitter.com" style={{backgroundColor:'#1ab188'}} />
                <Facebook link="https://www.facebook.com" style={{backgroundColor:'#1ab188'}} />
                <Whatsapp style={{backgroundColor:'#1ab188'}} />
                <Mail name={"Mail"} style={{backgroundColor:'#1ab188'}} />
            </div>                         
    )
}

export default SocialMediaIcons