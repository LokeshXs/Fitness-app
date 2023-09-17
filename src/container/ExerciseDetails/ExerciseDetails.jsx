import { useEffect, useState } from "react";
import useFetch from "../../Hooks/use-fetch";
import { Box, Chip, Skeleton, Stack, Typography } from "@mui/material";
import styles from "./ExerciseDetails.module.css";
import {useMediaQuery} from "@mui/material";

const ExerciseDetails = ({ exerciseDetails:exerciseData }) => {
  const smallComputerMatch = useMediaQuery('(max-width:1322px)');
  const tabletMatch = useMediaQuery('(max-width:904px)');
  const mobileMatch = useMediaQuery('(max-width:682px)');

  return (
    <Box component="main">
      <Box component="div" width="100vw" height="30vh" bgcolor="#000"  />
      <Stack component="section" className="exerciseDetails-Section" width="80vw" margin="0 auto"  flexDirection={tabletMatch?"column":'row'} justifyContent={tabletMatch?"center":'"space-between"'} flexWrap="wrap" alignContent={tabletMatch && "center"}>
        <Box>
          {exerciseData.gifUrl ? <img src={exerciseData.gifUrl} alt={exerciseData.name} className={styles['exerciseDetail-img']} /> : <Skeleton variant="rounded" animation="pulse" width={tabletMatch?"60vw":"30vw"}  height="100%"  />}

        </Box>
        <Box flex={1} display="flex" flexDirection="column" gap={mobileMatch?"4rem":"10rem"} justifyContent="center" alignItems="center">

          {exerciseData.bodyPart ? <Box>
            <Typography sx={{fontSize:{xs:'3rem',sm:'4rem',md:'6rem'}}} lineHeight={1.2} component="h1" variant="h1" textAlign="center">Train {exerciseData.bodyPart} <br /> With <br /> <Typography component="span" variant="h1" textTransform="capitalize" sx={{ borderBottom: '8px dotted #FCA311',fontSize:{xs:'3rem',sm:'4rem',md:'6rem'} }} >{exerciseData.name}</Typography></Typography>

          </Box> : <Skeleton variant="text" sx={{ fontSize: {xs:'3rem',sm:'4rem',md:'6rem'}, width: '80%' }} />}

          <Stack flexDirection={mobileMatch?"column":'row'} gap={mobileMatch?"2rem":"10rem"} >
            {
              exerciseData.target ? <Chip label={exerciseData.target} sx={{height: '4rem', fontSize: {xs:'1.2rem',sm:'2rem'}, fontWeight: '600', letterSpacing: '1.2px', backgroundColor: 'primary.main' }} /> : <Skeleton variant="rounded" width={210} height={60} />
            }
            {
              exerciseData.target ? <Chip label={exerciseData.equipment} variant="outlined" sx={{  height: '4rem', fontSize: {xs:'1.2rem',sm:'2rem'}, fontWeight: '600', letterSpacing: '1.2px', borderColor: 'primary.main' }} /> : <Skeleton variant="rounded" width={210} height={60} />
            }
          </Stack>

        </Box>


      </Stack>


    </Box>
  )
}

export default ExerciseDetails