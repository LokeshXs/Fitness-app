import { Stack, Typography } from "@mui/material";
import styles from "./BodyPartCard.module.css";
import { useDispatch } from "react-redux";
import { updateSearchedExercise } from "../../store/searchExerciseSlice";


const BodyPartCard = ({ icon, name }) => {

  const dispatch = useDispatch();


  return (
    <a href="#exercises" onClick={() => {
      dispatch(updateSearchedExercise(name));
    }}>
      <Stack  alignItems="center" justifyContent="space-around" flexWrap="wrap" sx={{
        backgroundColor: '#FFFFFF', borderRadius: '2rem',
        transition: 'all 0.5s',
        height:{xs:'16rem',sm:'20rem',md:'30rem'},
        cursor: 'pointer',
        '&:hover': {
          boxShadow: {xs:'-5px 5px 0 #FCA311, -10px 10px 0 #fdb541',md:'-10px 10px 0 #FCA311, -20px 20px 0 #fdb541'},
          borderColor: '#0578c5',
          translate: {xs:'10px  -10px',md:'20px  -20px'},


        }
      }} >
        <img className={styles.bodyPartIcon} src={icon} alt="icon" />
        <Typography sx={{fontSize:{xs:'1.6rem',sm:'2rem',md:'2.4rem'}}} fontWeight={500}>
          {name}
        </Typography>
      </Stack>
    </a>
  )

};

export default BodyPartCard;