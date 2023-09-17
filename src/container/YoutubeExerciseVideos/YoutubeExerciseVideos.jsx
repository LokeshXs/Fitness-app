import { Box, Stack, Typography } from "@mui/material";
import useFetch from "../../Hooks/use-fetch";
import { useEffect, useState } from "react";
import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";
import { youtubeOptions } from "../../utils/config";

const YoutubeExerciseVideos = ({ exerciseName, numberOfVideos }) => {
  const [relatedExerciseVideos, setRelatedExerciseVideos] = useState([]);

const modifiedExerciseName = exerciseName.replace(/\s+/g,'').trim();

  const { fetchedData, error, dataLoadingStatus: isDataLoaded } = useFetch(`https://youtube-search-and-download.p.rapidapi.com/search?query=${modifiedExerciseName}`,youtubeOptions);

  useEffect(() => {

    if(fetchedData.contents){

      const slicedData = fetchedData.contents.slice(0, 6);
      // console.log(slicedData);
      setRelatedExerciseVideos(slicedData)
    }

  }, [fetchedData]);


  return (
    <Box component="section" mt="12rem" bgcolor="#f5f5f5" padding="2rem 0" >
      <Stack justifyContent="center" alignItems="center" >
        <Typography padding="2rem" color="primary.main" borderRadius="2rem" bgcolor="secondary.main" component="span" variant="h2" sx={{fontSize:{xs:"2rem",sm:'4rem'}}}>Related Videos</Typography>
      </Stack>
      <HorizontalScroll data={relatedExerciseVideos} state={isDataLoaded} slidesPerView={4} isexerciseVideoCard={true} />

    </Box>)
};

export default YoutubeExerciseVideos;