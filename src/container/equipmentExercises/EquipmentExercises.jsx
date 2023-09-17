import { Box, Stack, Typography } from "@mui/material";
import useFetch from "../../Hooks/use-fetch";
import { useEffect, useState } from "react";
import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";
import { exerciseOptions } from "../../utils/config";


const EquipmentExercises = ({ equipmentName, numberOfExercises }) => {

  const [sameEquipmentExercises, setSameEquipmentExercises] = useState([]);

  const { fetchedData, error, dataLoadingStatus: isDataLoaded } = useFetch(`https://exercisedb.p.rapidapi.com/exercises/equipment/${equipmentName}`,exerciseOptions);

  useEffect(() => {
    const slicedData = fetchedData.slice(0, 12);
    setSameEquipmentExercises(slicedData);
  }, [fetchedData]);

  return (
    <Box  component="section" mt="12rem" bgcolor="#f5f5f5" padding="2rem 0" >
      <Stack justifyContent="center" alignItems="center" >
      <Typography padding="2rem" color="primary.main" borderRadius="2rem"  bgcolor="secondary.main" component="span"  variant="h2" sx={{fontSize:{xs:"2rem",sm:'4rem'}}}>Exercises for same equipment</Typography>
      </Stack>
      <HorizontalScroll data={sameEquipmentExercises} state={isDataLoaded} slidesPerView={4} isexerciseCard={true} />

    </Box>)

};

export default EquipmentExercises;