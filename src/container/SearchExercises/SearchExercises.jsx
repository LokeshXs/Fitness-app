import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";
import useFetch from "../../Hooks/use-fetch";


// Image imports
import all from "../../assets/exerciseIcons/all.png";
import back from "../../assets/exerciseIcons/back.png";
import cardio from "../../assets/exerciseIcons/cardio.png";
import chest from "../../assets/exerciseIcons/chest.png";
import lowerarms from "../../assets/exerciseIcons/lowerarms.png";
import lowerlegs from "../../assets/exerciseIcons/lowerlegs.png";
import neck from "../../assets/exerciseIcons/neck.png";
import shoulder from "../../assets/exerciseIcons/shoulder.png";
import upperarms from "../../assets/exerciseIcons/upperarms.png";
import upperlegs from "../../assets/exerciseIcons/upperlegs.png";
import waist from "../../assets/exerciseIcons/waist.png";
import errorImg from "../../assets/error.png";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearchedExercise } from "../../store/searchExerciseSlice";
import { exerciseOptions } from "../../utils/config";

const imagesData = [
  {
    image: all,
  },
  {
    image: back,
  },
  {
    image: cardio,
  },
  {
    image: chest,
  },
  {
    image: lowerarms,
  },
  {
    image: lowerlegs,
  },
  {
    image: neck,
  },
  {
    image: shoulder,
  },
  {
    image: upperarms,
  },
  {
    image: upperlegs,
  },
  {
    image: waist,
  },
];




const SearchExercises = () => {

  const [bodyPartListData, setBodyPartListData] = useState([]);
  const searchTextFieldRef = useRef();
  const dispatch = useDispatch();




  const { dataLoadingStatus: dataLoaded, error, fetchedData } = useFetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
  // const smallComputerMatch = useMediaQuery('(max-width:1322px)');
  // const tabletMatch = useMediaQuery('(max-width:904px)');
  // const mobileMatch = useMediaQuery('(max-width:682px)');

  const handleSearchFormSubmission = (event) => {
    event.preventDefault();
    const searchedExercise = searchTextFieldRef.current.value;
    // console.log(searchedExercise);
    dispatch(updateSearchedExercise(searchedExercise));
    searchTextFieldRef.current.value = "";
    console.log(searchTextFieldRef.current);
    window.location.hash = "#exercises";
  }

 



  useEffect(() => {

    if (dataLoaded && !error) {
      let bodyPartList = ['all', ...fetchedData];
      console.log(fetchedData);

      bodyPartList = bodyPartList.map((item, index) => {
        return {
          name: item,
          icon: imagesData[index].image,
        }
      });

      setBodyPartListData(bodyPartList);

    }
  }, [dataLoaded, fetchedData]);






  return <Box  component="section" sx={{ width: { xs: '90vw', md: '90vw' }, margin: '6rem auto' }}>
    <Typography sx={{ fontSize: { xs: '3rem', md: '4rem' } }} variant="h2" component="h2" textAlign="center" fontWeight={700}>Awesome Exercises <br /> You
      Should Know</Typography>

    <Box m="4rem 0">
      <form onSubmit={handleSearchFormSubmission} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
        <TextField id="outlined-basic" placeholder="Search Exercises" variant="outlined" sx={{ width: { xs: '100%', md: '60%' } }} inputRef={searchTextFieldRef} inputProps={{ sx: { fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 500, padding: { xs: '1rem', md: '1.4rem' } } }} />
        <Button type="submit" sx={{
          backgroundColor: 'primary.main', color: '#000', fontSize: { xs: '1.4rem', md: '2rem' },
          '&:hover': {
            backgroundColor: 'primary.dark'
          }
        }}>Search</Button>
      </form>
    </Box>

    {error ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: { xs: '2rem', md: '4rem' } }}><Typography sx={{ textAlign: 'center', fontSize: { xs: '1.6rem', md: '2rem' } }}>An Error occured while fetching, <br />Please Reload </Typography>
      <img src={errorImg} alt="error" style={{ width: '10rem' }} />
    </Box> : <HorizontalScroll data={bodyPartListData} state={dataLoaded} isexerciseCard={false} isexerciseVideoCard={false} />}

    {/* {dataLoaded ? <HorizontalScroll data={bodyPartListData} /> : 'Loading ...'} */}
  </Box>
};

export default SearchExercises;

