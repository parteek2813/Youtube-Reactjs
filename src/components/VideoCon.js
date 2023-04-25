import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../constants/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import DescCard from "./DescCard";

const VideoCon = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoCon;
