import ReactPlayer from "react-player/youtube";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer = ({ url }: VideoPlayerProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <ReactPlayer url={url} controls width="100%" />
    </div>
  );
};

export default VideoPlayer;
