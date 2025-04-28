import { CheckIcon } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

interface video {
  url: string;
  label: string;
}
interface VideoPlayerProps {
  caption: string;
  videoList: video[];
}

const VideoPlayer = ({ caption, videoList }: VideoPlayerProps) => {
  const [currentVideoUrl, setCurrentVideoUrl] = useState(videoList[0].url);

  return (
    <div className="w-full max-w-2xl mx-auto dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 dark:text-gray-100">{caption}</h1>
      {videoList.map((item) => (
        <button
          key={item.url}
          onClick={() => setCurrentVideoUrl(item.url)}
          className={`flex items-center justify-between w-full p-2 rounded-md 
         ${
           currentVideoUrl === item.url
             ? "bg-blue-100 text-blue-600"
             : "hover:bg-gray-100 dark:hover:bg-gray-500"
         }
       `}
        >
          <span>{item.label}</span>
          {currentVideoUrl === item.url && <CheckIcon className="w-4 h-4" />}
        </button>
      ))}
      <div className="w-full max-w-2xl mx-auto">
        <ReactPlayer url={currentVideoUrl} controls width="100%" />
      </div>
    </div>
  );
};

export default VideoPlayer;
