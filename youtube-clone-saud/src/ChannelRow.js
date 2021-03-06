import React from 'react';
import {Avatar} from '@material-ui/core'
import  VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import "./ChannelRow.css";

const ChannelRow = ({image,channel,verified,subs,noOfVideos,description}) => {
    return (
        <div className="channelrow">
<Avatar className="channelRow__logo" alt={channel} src={image}/>        
<div className="channelRow__text">
<h4>{channel} {verified && <VerifiedIcon />}</h4>
               <p>{subs} subscribers . {noOfVideos} Videos</p>
               <p>{description}</p>
    </div>    
        </div>
    )
}

export default ChannelRow
