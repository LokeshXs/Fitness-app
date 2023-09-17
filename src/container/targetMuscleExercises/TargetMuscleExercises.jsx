import { Box, Stack, Typography } from "@mui/material";
import useFetch from "../../Hooks/use-fetch";
import { useEffect, useState } from "react";
import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";
import { exerciseOptions } from "../../utils/config";


const TargetMuscleExercise = ({ targetMuscleName, numberOfExercises }) => {

  const [sameTargetMuscleExercises, setSameTargetMuscleExercises] = useState([]);

  const { fetchedData, error, dataLoadingStatus: isDataLoaded } = useFetch('https://exercisedb.p.rapidapi.com/exercises/target/pectorals',exerciseOptions);

  useEffect(() => {
    if(error){
      console.log(error);
    }
    const slicedData = fetchedData.slice(0, 12);
    setSameTargetMuscleExercises(slicedData);

  }, [fetchedData,error]);

  return (
    <Box  component="section" mt="6rem" bgcolor="#f5f5f5" padding="2rem 0" >
      <Stack justifyContent="center" alignItems="center" >
      <Typography padding="2rem" color="primary.main" borderRadius="2rem"  bgcolor="secondary.main" component="span"  variant="h2" sx={{fontSize:{xs:"2rem",sm:'4rem'}}}>Exercises for same target muscle</Typography>
      </Stack>
      <HorizontalScroll data={sameTargetMuscleExercises} state={isDataLoaded} slidesPerView={4} isexerciseCard={true} />


    </Box>)

};

export default TargetMuscleExercise;