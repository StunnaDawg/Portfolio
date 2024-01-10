import ProjectInfo from "../../components/ProjectInfo"
import FootballImage from "../../assets/FootBall-1.png"
import FootballImage2 from "../../assets/FootBall-2.png"
import FootballImage3 from "../../assets/FootBall-3.png"

const FootballTracker = () => {
  return (
    <>
      <ProjectInfo
        title="English Football Tracker"
        projectDescription="The English Football Tracker is a web application that follows the Non-Priemier League in England. Users Can choose their favourite team where and the Youtube API will display videos of your favourite team. 
        Users can look at upcoming matches and past macthes, and filter matches by league. When Viewing upcoming matches you can view the available match data. *NOTE* At the moment the league standings does not work and does not display the League Standings."
        challengeDescription="The biggest challenge during development was utilizing the FootballAPI. Most notably, our API did not allow us permission for use of the yesterday variable. Using a fixed date allowed me to manually set the data fectched to the day before"
        roleDescription="Development of Upcoming Matches and Past Matches functionaility"
        toolsDescription="Javascript, PureCSS"
        liveLink={"https://roseandlily33.github.io/englishFootballTracker32/"}
        status={"Complete"}
        gitHub={"https://github.com/roseandlily33/englishFootballTracker32"}
        imageLink1={FootballImage}
        imageLink2={FootballImage2}
        imageLink3={FootballImage3}
      />
    </>
  )
}

export default FootballTracker
