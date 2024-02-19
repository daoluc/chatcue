'use client'

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const Demo = () => {
    const [playing, setPlaying] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const handleVideoClick = () => {
        console.log("I'm here!!", playing);
        setPlaying(!playing);
    };

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isClient)
        return (
            <section className="text-gray-600 body-font">
                {/* <iframe src="https://player.vimeo.com/video/914323301?badge=0&autopause=0&player_id=0&app_id=58479title=0&byline=0&portrait=0&sidedock=0"
                    frameborder="0"           
                    allowFullScreen
                    width="100%"
                    className="h-60 md:h-96"
                    title=""
                />                
                <Script src="https://player.vimeo.com/api/player.js" /> */}
                {/* <video width="100%" className="h-64 md:h-96" controls preload="preload">
                <source src="ChatCue.mp4" type="video/mp4" />
                Your browser does not support this format.
            </video> */}
                <div className="video-container" onClick={handleVideoClick}>
                    <ReactPlayer
                        url="ChatCue.mp4"
                        width="100%"
                        className="h-60 sm:h-96 max-h-60 sm:max-h-96"
                        playing={playing}
                        // preload='auto'
                    />
                </div>
            </section>
        )
    return null;
}

export default Demo