import ProjectInfo from "../../components/ProjectInfo"
import PokeImage1 from "../../assets/PokeGuesser-5.png"
import PokeImage2 from "../../assets/PokeGuesser-2.png"
import PokeImage3 from "../../assets/PokeGuesser-7.png"

const PokeGuesser = () => {
  return (
    <>
      <ProjectInfo
        title="PokeGuesser"
        challengeDescription="Challenges faced"
        roleDescription="Front End"
        toolsDescription="Tools"
        status={"On going"}
        gitHub={"https://github.com/StunnaDawg/PokeGuesser"}
        imageLink1={PokeImage1}
        imageLink2={PokeImage2}
        imageLink3={PokeImage3}
      />
    </>
  )
}

export default PokeGuesser
