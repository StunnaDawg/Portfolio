import ProjectInfo from "../../components/ProjectInfo"
import FitImage1 from "../../assets/FitBuild-1.png"
import FitImage2 from "../../assets/FitBuild-2.png"
import FitImage3 from "../../assets/FitBuild-3.png"

const FitBuilder = () => {
  return (
    <>
      <ProjectInfo
        title="FitBuilder"
        projectDescription="FitBuilder is a exercise program creation application, Allows User to create programs, create workouts, select exercises and choose the sets and reps to add to workouts. Save Programs, Start Workouts within a Program"
        challengeDescription="During developement, when buidling the workout page I struggled with indexing the correct exercise to show the user. My biggest issue was my naming of variables and state were not clear enough which sent me down the wrong path.
        I learned a valuable lesson about making my variable names clear. We also faced deployment issues with Heroku, that were eventually fixed through config file changes."
        roleDescription="Front End: Dashboard, Start Workout Within Program, View Programs, VB"
        toolsDescription="NodeJs, React, Apollo Client, GraphQL, ExpressJs, MongoDB, AntDesign"
        status={"Complete"}
        gitHub={"https://github.com/Pilotguide9897/FitBuilder"}
        liveLink={"https://fit-build-03ae366fc163.herokuapp.com/"}
        imageLink1={FitImage1}
        imageLink2={FitImage2}
        imageLink3={FitImage3}
      />
    </>
  )
}

export default FitBuilder
