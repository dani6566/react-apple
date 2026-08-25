import React, { useEffect, useState, link } from 'react';
import "./YoutubeVideos.css"

const YoutubeVideos = () => {
    const [YoutubeVideo, setYoutubeVideo] = useState()
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

    useEffect(() => {

        fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8`)
            .then((data) => data.json()).then((data) => {
                const youTubeVideoData = data.items
                setYoutubeVideo(youTubeVideoData)
            })
    }
        , []);
    return (
        <div className="youtube-videos-wrapper">
            <div className="container">
                <div className="title-wrapper text-center">
                    <h2>Latest Videos</h2>
                </div>

                <div className="row">
                    {YoutubeVideo?.map((singleVideo, i) => {
                        const vidId = singleVideo.id.videoId;
                        const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

                        return (
                            <div key={i} className="col-sm-12 col-md-3 mb-4">
                                <div className="single-video">
                                    <div className="video-thumbnail">
                                        <a href={vidLink} target="_blank" >
                                            <img
                                                src={singleVideo.snippet.thumbnails.high.url}
                                                alt={singleVideo.snippet.title}
                                            />
                                        </a>
                                    </div>
                                    <div className="video-info">
                                        <div className="video-title">
                                            <a href={vidLink} target="_blank" >
                                                {singleVideo.snippet.title}
                                            </a>
                                        </div>

                                        <div className="video-desc">
                                            {singleVideo.snippet.description}
                                        </div>

                                        <div className="video-date">
                                            Published: {singleVideo.snippet.publishedAt.slice(0, 10)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default YoutubeVideos;
