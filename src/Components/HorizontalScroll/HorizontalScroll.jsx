// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import BodyPartCard from '../BodyPartCard/BodyPartCard';


import "./HorizontalScroll.css";
import { Skeleton, useMediaQuery } from '@mui/material';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { useEffect } from 'react';

const HorizontalScroll = ({ data, state, isexerciseCard = false, isexerciseVideoCard = false }) => {

  // console.log(data);
  const smallComputerMatch = useMediaQuery('(max-width:1322px)');
  const tabletMatch = useMediaQuery('(max-width:904px)');
  const mobileMatch = useMediaQuery('(max-width:682px)');

  console.log(data);
  let slidesPerView = 5;
  if(!isexerciseCard && !isexerciseVideoCard){
  if (mobileMatch) {
    slidesPerView = 2;
  } else if (tabletMatch) {
    slidesPerView = 3;
  } else if (smallComputerMatch) {
    slidesPerView = 4;
  }
}else{
  slidesPerView=4;
  if (mobileMatch) {
    slidesPerView = 1;
  } else if (tabletMatch) {
    slidesPerView = 2;
  } else if (smallComputerMatch) {
    slidesPerView = 3;
  }
}

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={mobileMatch ? 20 : 40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >

        {!state &&
          <>
            <SwiperSlide>
              <Skeleton variant="rounded" width={210} height={200} />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton variant="rounded" width={210} height={200} />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton variant="rounded" width={210} height={200} />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton variant="rounded" width={210} height={200} />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton variant="rounded" width={210} height={200} />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton variant="rounded" width={210} height={200} />
            </SwiperSlide>

          </>
        }


        {state && data.map((item, index) => {
          // console.log(item.Image);
          return <SwiperSlide key={index}>
            {/* {isexerciseCard ? <ExerciseCard imageUrl={item.gifUrl} ExerciseName={item.name} target={item.target} bodyPart={item.bodyPart} id={item.id} /> : <BodyPartCard icon={item.icon} name={item.name} />} */}

            {
              isexerciseCard ? <ExerciseCard linkto={`/exercise/${item.id}`} imageUrl={item.gifUrl} ExerciseName={item.name} target={item.target} bodyPart={item.bodyPart} id={item.id} /> : isexerciseVideoCard ? <ExerciseCard linkto={`https://www.youtube.com/watch?v=${item.video.videoId}`} imageUrl={item.video.thumbnails[0].url} ExerciseName={item.video.title} target={item.video.channelName} bodyPart={item.video.viewCountText} id={item.video.videoId} /> : <BodyPartCard icon={item.icon} name={item.name} />
            }

          </SwiperSlide>
        })}

      </Swiper>
    </>
  )
};

export default HorizontalScroll;