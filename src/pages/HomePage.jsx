import HorizontalScroll from "../Components/HorizontalScroll/HorizontalScroll"
import ExercisesSection from "../container/ExercisesSection/ExercisesSection"
import FeatureSection from "../container/FeatureSection/FeatureSection"
import HeroSection from "../container/HeroContainer/HeroSection"
import SearchExercises from "../container/SearchExercises/SearchExercises"


const HomePage = ({intersectionRef}) => {
  return (
    <>
    <HeroSection intersectionRef={intersectionRef} />
    <SearchExercises  />
    <ExercisesSection />
    <FeatureSection />
    </>
  )
}

export default HomePage