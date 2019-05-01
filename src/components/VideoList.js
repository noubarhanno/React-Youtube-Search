import React from 'react';
import VideoItem from './VideoItem';


// instead of passing props we can pass the object key inside the props by using {} 
// instead of 
// const VideoList = (props) => {}
// we can use 
// const VideoList = ({ videos }) => {}
// as videos here is the object key nside the props taken from App.js
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;