import ProjectInfo from "../../components/ProjectInfo"
import PokeImage1 from "../../assets/PokeGuesser-5.png"
import PokeImage2 from "../../assets/PokeGuesser-2.png"
import PokeImage3 from "../../assets/PokeGuesser-7.png"

const PokeGuesser = () => {
  return (
    <>
      <ProjectInfo
        title="PokeGuesser"
        projectDescription="PokeGuesser is game to test your Pokemon knowledge! Players can choose from classic mode or practice mode in the current version. In both modes players choose a specific generation or all generations. In classic mode
        players are given 3 lives and guess correctly to receieve a point, no backspaces are allowed within the OTP input. In practice mode you get endless tries. In a future update players scores will be uploaded to a leaderboard!"
        challengeDescription="Creating the OTP input challenged me with my knowledge of useRef/ref in React."
        roleDescription="FullStack Developer"
        toolsDescription="TypeScript, React, Firebase, Firestore"
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
