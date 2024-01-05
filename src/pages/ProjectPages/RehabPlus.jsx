import ProjectInfo from "../../components/ProjectInfo"
import rehabDummyShot from "../../assets/RehabTestSceenShot.png"

const RehabPlus = () => {
  return (
    <>
      <ProjectInfo
        title="RehabPlus"
        challengeDescription="Challenges faced"
        roleDescription="Front End"
        toolsDescription="Tools"
        projectDescription="Rehab Plus Description"
        imageLink1={rehabDummyShot}
        imageLink2={rehabDummyShot}
        imageLink3={rehabDummyShot}
      />
    </>
  )
}

export default RehabPlus
