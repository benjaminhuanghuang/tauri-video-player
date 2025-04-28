import { CheckIcon } from "lucide-react"; // <-- you can use any icon you want
import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";

const playList = [
  {
    label: "好聽英文歌單",
    url: "https://www.youtube.com/watch?v=JQzWDeaU3jg",
  },
  {
    label: "50 Classical Music Masterpieces for Relaxation & the Soul",
    url: "https://www.youtube.com/watch?v=IYd1-cPwQCk",
  },
];

const Study = () => {
  const [videoUrl, setVideoUrl] = useState(playList[0].url);
  return (
    <div className="w-full max-w-2xl mx-auto dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 dark:text-gray-100">Study</h1>
      {playList.map((item) => (
        <button
          key={item.url}
          onClick={() => setVideoUrl(item.url)}
          className={`flex items-center justify-between w-full p-2 rounded-md 
         ${
           videoUrl === item.url
             ? "bg-blue-100 text-blue-600"
             : "hover:bg-gray-100 dark:hover:bg-gray-500"
         }
       `}
        >
          <span>{item.label}</span>
          {videoUrl === item.url && <CheckIcon className="w-4 h-4" />}
        </button>
      ))}
      <VideoPlayer url={videoUrl} />
    </div>
  );
};
export default Study;
