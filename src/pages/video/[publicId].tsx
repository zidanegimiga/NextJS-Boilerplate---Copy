/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, GetStaticPaths } from "next";
import VideoPlayer from "features/Sights/Video/Video";
import styles from "../../styles/VideoPage.module.scss";
import { Instagram, Twitter, Share } from "shared/Icons/Twitter";
import React from "react";
import { useRouter } from "next/router";
import { Playlist } from "../../shared/Icons/Playlist";
import SightsCategory from "features/Sights/SightsCategory";
import SightsCard from "features/Sights/SightsCard";
import SideBarItem from "shared/SideBarItem/SideBarItem";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { usePlaylist } from "global/AudioPlaylistContext";
import Link from 'next/link'

type Videos = any;

{/** TD:
  * Fetch suggested videos by getting videos with a similar tag
  * Get the video data from the video specifically rather than fetching all video data
*/}

const Sight = ({ videos }: any) => {
  const { videoWatchlist } = usePlaylist();
  console.log(videoWatchlist)
  const videosData = videos?.response?.result;
  const router = useRouter();
  const { publicId } = router.query;
  const video = videosData?.find((video: any) => video?.public_id === publicId);
  const suggestedVideos = videosData?.slice(50, 69);
  console.log("Vid: ", suggestedVideos);
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const backgroundImage =
    `${process.env.NEXT_PUBLIC_API}` +
    `/static/media/videos_images/` +
    video?.landscape_image;

  //Date Formatting
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(video?.created_on);

  // const day = days[date.getDay()]
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className={styles.PageWrapper}>
      <div className={styles.top}>
        <SideBarItem />
        <div className={styles.content}>
          <VideoPlayer video={video} />
          <div className={styles.videoFeatures}>
            <div className={styles.videoDetails}>
              <div className={styles.videoDescriptionContainer}>
                <img
                  src={
                    `${process.env.NEXT_PUBLIC_API}` +
                    `/static/media/videos_images/` +
                    video?.square_image
                  }
                  width={120}
                  height={120}
                  alt={""}
                />
                <div className={styles.videoTextualData}>
                  <div>
                    <div className={styles.videoTitle}>{video?.title}</div>
                    <div className={styles.videoDescription}>
                      {video?.description}...
                    </div>
                  </div>
                  <div className={styles.seeMoreBtn}>SEE MORE</div>
                </div>
              </div>
              <div className={styles.moreInfoContainer}>
                <div className={styles.creators}>
                  Created by: <span>{video?.creators_name}</span>
                </div>
                <div className={styles.tags}>
                  {video?.genres?.map((genre, index) => {
                    return (
                      <div key={index} className={styles.tag}>
                        {genre?.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={styles.videoQueueContainer}>
              <div className={styles.queueContainer}>
                <div className={styles.queueHeader}>QUEUE</div>
                <div className={styles.queueItemsContainer}>
                  {videoWatchlist?.map((queueItem, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Link href={`https://kalabars.vercel.app/video/${queueItem?.public_id}`}>
                          <div className={styles.queueItem}>
                            <img
                              src={`https://content.kalabars.com/static/media/video_images/${queueItem?.landscape_image}`}
                              alt="poster"
                              className={styles.queueItemImage}
                            />
                            <div className={styles.queueItemInfo}>
                              <h1>{queueItem?.title}</h1>
                              <p>{queueItem?.creators_name}</p>
                            </div>
                          </div>
                        </Link>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.suggestedVideos}>
            <SightsCategory name={"You might like:"} data={suggestedVideos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sight;

export async function loadVideos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/videos/all`, {
    headers: {
      "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
    },
  });
  const data = await res.json();
  return data;
}

export async function getServerSideProps(context: any) {
  const payload = await loadVideos();
  return {
    props: {
      videos: payload,
    },
  };
}
