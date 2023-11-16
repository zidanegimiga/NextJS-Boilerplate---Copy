import MovieCarousel from "features/Sights/MovieCarousel";
import SightsCard from "features/Sights/SightsCard/SightsCard";
import SightsCategory from "features/Sights/SightsCategory";
import { dirname } from "path";
import { useState, useRef, useEffect } from "react";
import Down from "../../public/downIcon.svg";
import styles from "../styles/Sights.module.scss";
import SideBarItem from "shared/SideBarItem/SideBarItem";
import { ToastContainer, toast } from "react-toastify";

const Sights = ({
  carouselVideos,
  drama,
  musicVideos,
  comedy,
  documentary,
  kids,
  series,
  featured,
  thriller,
  local,
  masterclasses
}) => {
  const carouselVids = carouselVideos?.response?.result;
  const [allVideos, setAllVideos] = useState([])
  console.log("F: ", featured)

  async function loadAllVideos() {
   try{
     const resVideos = await fetch(process.env.NEXT_PUBLIC_API + `/videos`, {
       headers: {
         "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
       },
     });
     const allVideos = await resVideos.json();
     setAllVideos(allVideos)
   } catch(e){
    console.log("Error: ", e)
   }
  }

  useEffect(()=>{
    loadAllVideos()
    console.log("All Videos: ", allVideos)
  }, [])
  
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.top}>
        <SideBarItem />
        <div className={styles.content}>
          <MovieCarousel videos={carouselVids} />
          <div id="more" className={styles.sightsCategoryWrapper}>
            <h2>🔥 KALABARS CATEGORIES 🔥</h2>
            <SightsCategory name={"Local"} data={local?.response?.result} />
            <SightsCategory name={"Masterclasses"} data={masterclasses?.response?.result} />
            <SightsCategory name={"Masterclasses"} data={featured?.response?.result} />
            <SightsCategory name={"Thriller"} data={thriller?.response?.result} />
            <SightsCategory name={"Comedy"} data={comedy?.response?.result} />
            <SightsCategory
              name={"Documentary"}
              data={documentary?.response?.result}
            />
            <SightsCategory name={"Drama"} data={drama?.response?.result} />
            <SightsCategory name={"Series"} data={series?.response?.result} />
            <SightsCategory
              name={"Music"}
              data={musicVideos?.response?.result}
            />
            <SightsCategory name={"Kids"} data={kids?.response?.result} />            
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Sights;


export async function loadVideos() {
  //Carousel Vids
  const resVideos = await fetch(process.env.NEXT_PUBLIC_API + `/tags/trending/videos`, {
    headers: {
      "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
    },
  });
  const carouselVideos = await resVideos.json();

  //Carousel Vids
  const resMasterClasses = await fetch(process.env.NEXT_PUBLIC_API + `/tags/masterclasses/videos`, {
    headers: {
      "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
    },
  });
  const masterclasses = await resMasterClasses.json();
  
  //originals
  const originalsGenres = await fetch(
    process.env.NEXT_PUBLIC_API + `/genres/kalabars-originals/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const originals = await originalsGenres.json();

  //Drama
  const dramaGenres = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/dram/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const dramaGenre = await dramaGenres.json();

  //Series
  const seriesRes = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/multivideo/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const series = await seriesRes.json();

  //Documentary
  const documentaryGenres = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/documentary/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const documentaryGenre = await documentaryGenres.json();

  //Comedy
  const comedyGenres = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/comedy/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const comedyGenre = await comedyGenres.json();

  //Kids
  const kidsRes = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/Kids/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const kids = await kidsRes.json();

  //Music Videos
  const musicVidRes = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/music-videos/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const musicVideos = await musicVidRes.json();

  //Featured
  const featuredRes = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/in-session/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const featured = await featuredRes.json();

  //Thriller
  const thrillerRes = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/thriller/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const thriller = await thrillerRes.json();

  //Local
  const localRes = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/local/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const local = await localRes.json();

  return {
    carouselVideos,
    originals: originals,
    comedy: comedyGenre,
    documentary: documentaryGenre,
    drama: dramaGenre,
    kids: kids,
    musicVideos: musicVideos,
    series: series,
    featured: featured,
    thriller: thriller,
    local: local,
    masterclasses: masterclasses
  };
}

export async function getServerSideProps() {
  const { carouselVideos, originals, comedy, documentary, drama, kids, musicVideos, series, featured, thriller, local, masterclasses } = await loadVideos();
  
  return {
    props: {
      carouselVideos,
      originals,
      documentary,
      drama,
      comedy,
      kids,
      musicVideos,
      series,
      featured,
      thriller,
      local,
      masterclasses
    },
  };
}