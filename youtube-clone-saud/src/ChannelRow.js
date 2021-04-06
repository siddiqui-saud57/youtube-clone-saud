import React from 'react';
import './channelRow.css';
import {Avatar} from '@material-ui/core'
import  VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'


const ChannelRow = ({image,channel,verified,subs,noOfVideos,description}) => {
    return (
        <div className="channelRow">
           <Avatar className="channelRow__logo" alt={channel} src={image}/>
           <div channelName="channelRow__text">
               <h4>{channel} {verified && <VerifiedIcon />}</h4>
               <p>{subs} subscribers . {noOfVideos} Videos</p>
               <p>{description}</p>
           </div>
        </div>
    )
}

export default ChannelRow
