import React, { FC, useEffect, useState } from "react";
import { IArtist } from "types/types";
import YouTube, { YouTubeProps } from "react-youtube";
import { videoIdFromYoutubeUrl } from "utils/utils";

interface GalleryProps {
  artist: IArtist;
}

const Gallery: FC<GalleryProps> = ({ artist }) => {
  const [videoId, setVideoId] = useState<string>("");

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  useEffect(() => {
    const id = videoIdFromYoutubeUrl(artist.promo_video_url);
    setVideoId(id);
  }, []);

  return (
    <>
      <div className="gallery__videos">
        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
      </div>
    </>
  );
};

export default Gallery;
