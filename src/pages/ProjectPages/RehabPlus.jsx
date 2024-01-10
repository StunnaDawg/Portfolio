import ProjectInfo from "../../components/ProjectInfo"
import rehabDummyShot from "../../assets/RehabTestSceenShot.png"

const RehabPlus = () => {
  return (
    <>
      <ProjectInfo
        title="RehabPlus"
        challengeDescription="Throughout the ongoing development of RehabPlus, there have been many challenges from learning new technologies like Firebase, React Native and Expo go to learning how to develop in a mobile enviroment opposed to a web development enviroment.
        However the biggest obstacle I have faced so far was the complete code refractor I went through to go from Javascript to Typescript. The refractor really pushed my understanding of Typescript. The reason I decided to switch to Typescript was because my Project was getting to big,
        and I believed Typescript would help me handle errors, and debug them making Development go smoother. Utilizing Typescript has been the best choice!"
        roleDescription="FullStack Developer"
        toolsDescription="TypeScript, React Native, React Navigation, Firebase, Firestore, Nativewind(A TailwindCSS library made for React Native), Expo Go"
        projectDescription="Designed for orthopedic surgeons, physiotherapists, and patients, Rehab Plus is a post-surgical/injury recovery application. Rehab Plus uses Protocols to supply patients with a streamlined exercise routine for post-surgical/injury recovery"
        imageLink1={rehabDummyShot}
        imageLink2={rehabDummyShot}
        imageLink3={rehabDummyShot}
        status={"On going"}
        gitHub={"https://github.com/StunnaDawg/RehabPlus"}
      />
    </>
  )
}

export default RehabPlus
