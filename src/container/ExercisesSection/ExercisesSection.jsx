import { Box, Pagination, Skeleton, Stack, Typography,useMediaQuery } from "@mui/material";
import ExerciseCard from "../../Components/ExerciseCard/ExerciseCard";
import { useSelector } from "react-redux";
import useFetch from "../../Hooks/use-fetch";
import { useEffect, useState } from "react";
import errorImg from "../../assets/error.png";
import { exerciseOptions } from "../../utils/config";

const ExercisesSection = () => {

  const exerciseName = useSelector((state) => state.exerciseSearchReducer.value);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [totalExercisesPages, setTotalExercisesPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  const mobileMatch = useMediaQuery('(max-width:682px)');
  const { fetchedData, error, dataLoadingStatus: dataLoaded } = useFetch('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

  useEffect(() => {
    if (dataLoaded) {
      if (exerciseName === 'all' || exerciseName === '') {
        setCurrentPage(1);
        setFilteredExercises(fetchedData);
        console.log(fetchedData.length);
        const totalPages = Math.floor(fetchedData.length / 10);
        console.log('Pages', totalPages);
        setTotalExercisesPages(totalPages);
      } else {
        setCurrentPage(1);  
        const filteredExercise = fetchedData.filter((item) => item.equipment.includes(exerciseName) || item.name.includes(exerciseName) || item.target.includes(exerciseName) || item.bodyPart.includes(exerciseName));
        const totalPages = Math.floor(filteredExercise.length / 10);
        console.log(filteredExercise.length);
        console.log('Pages', totalPages);
        setTotalExercisesPages(totalPages);
        setFilteredExercises(filteredExercise);

      }

    }

  }, [fetchedData, dataLoaded, exerciseName]);
  // filteredExercises.length === 0  ? <Skeleton variant="rectangular" width="100%" height="20rem" /> :

  const paginationHandler = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
    window.location.hash = "#exercises";
  }

  return (
    <Box component="section" sx={{ width: {xs:'90vw',md:'90vw'}, margin: '6rem auto' }} id="exercises">

      {(filteredExercises.length === 0 && error) && <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: {xs:'2rem',md:'4rem'} }}><Typography sx={{ textAlign: 'center',fontSize: {xs:'1.6rem',md:'2rem'}}}>An Error occured while fetching, <br />Please Reload </Typography>
        <img src={errorImg} alt="error" style={{ width: '10rem' }} />
      </Box>}



      {(filteredExercises.length === 0 && !error) && <Skeleton variant="rectangular" width="100%" height="20rem" />}

      {(filteredExercises.length > 0 && !error) && <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 350px))', columnGap: '2rem', rowGap: '4rem', alignItems: 'center', justifyContent: 'center' }}>
        {filteredExercises.slice((currentPage-1)*10, (currentPage) * 10).map((item, index) => {
          return <ExerciseCard linkto={`/exercise/${item.id}`} key={index} imageUrl={item.gifUrl} ExerciseName={item.name} target={item.target} bodyPart={item.bodyPart} id={item.id} />
        })}


      </Box>}


      {(filteredExercises.length !== 0 && !error) && <Stack justifyContent="center" flexDirection="row" mt="4rem" sx={{ width: '100%' }}>
        <Pagination size={mobileMatch?'small':'medium'} count={totalExercisesPages}  variant="outlined" color="primary" onChange={paginationHandler} page={currentPage} />
      </Stack>}


    </Box>
  )
};

export default ExercisesSection;