import VideoPlayer from "@/components/VideoPlayer";

const playList = [
  {
    label: "50 Classical Music Masterpieces for Relaxation & the Soul",
    url: "https://www.youtube.com/watch?v=IYd1-cPwQCk",
  },
];

const Methodology = () => {
  return <VideoPlayer videoList={playList} caption="Methodology" />;
};

export default Methodology;
