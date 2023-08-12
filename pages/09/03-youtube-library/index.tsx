import YouTube from "react-youtube";
import type { YouTubeProps } from "react-youtube";

export default function Example() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    event.target.mute();
  };

  const opts: YouTubeProps["opts"] = {
    height: "600",
    width: "800",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
    mute: 1,
  };

  return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />;
}
