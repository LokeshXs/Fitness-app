
import ExerciseDetails from "../container/ExerciseDetails/ExerciseDetails";
import TargetMuscleExercise from "../container/targetMuscleExercises/TargetMuscleExercises";
import EquipmentExercises from "../container/equipmentExercises/EquipmentExercises";
import YoutubeExerciseVideos from "../container/YoutubeExerciseVideos/YoutubeExerciseVideos";
import { useLoaderData, defer, Await, json } from "react-router-dom";
import { Suspense } from "react";
import { exerciseOptions } from "../utils/config";

const ExercisePage = () => {

  const { exerciseDetails } = useLoaderData();



  return <>

    <Suspense fallback={<ExerciseDetails exerciseDetails={exerciseDetails} />}>
      <Await resolve={exerciseDetails}>
        {(exerciseDetails) => <><ExerciseDetails exerciseDetails={exerciseDetails}  />
       
            <TargetMuscleExercise targetMuscleName={exerciseDetails.target} numberOfExercises={12} />
          
          <EquipmentExercises equipmentName={exerciseDetails.equipment} numberOfExercises={12} />
          <YoutubeExerciseVideos exerciseName={exerciseDetails.name} numberOfVideos={12} />
        </>
        }
      </Await>
    </Suspense>


  </>
};

export default ExercisePage;

const getExerciseDetails = async (id) => {


  const res = await fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
  if (!res.ok) {
    throw json({ message: "could not fetch events" }, { status: 500 });
  } else {
    const data = await res.json();

    // console.log(data);

    return data;
  }

}

export const loader = async ({ request, params }) => {
  const id = params.exerciseId;
  return defer({
    exerciseDetails: getExerciseDetails(id),
  })
}

