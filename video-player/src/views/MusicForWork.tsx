import VideoPlayer from "@/components/VideoPlayer";

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
const MusicForWork = () => {
  return <VideoPlayer videoList={playList} caption="Music for work" />;
};

export default MusicForWork;
