import { PortfolioCard } from "../components/PortfolioCard"

export const PortfolioPage = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col content-center">
          <PortfolioCard
            title="Rehab Plus"
            description="Rehab Plus is a post-surgical/injury recovery application. Built with React Native/ TypeScript, React Navigation, and Firebase Backend Integration"
            githubLink="https://github.com/StunnaDawg/RehabPlus"
          />

          <PortfolioCard
            title="PokeGuesser"
            description="A Pokemon Name guessing game, built using TypeScript and React with a Firebase Backend Integration"
            githubLink="https://github.com/StunnaDawg/PokeGuesser"
          />

          <PortfolioCard
            title="Head To Head"
            description="Sports Betting game that puts Athletes from the same sport or different sports head to head. Built using TypeScript, React, and Go for the Backend"
            githubLink="https://github.com/StunnaDawg/Head-To-Head"
          />

          <PortfolioCard
            title="FitBuilder"
            description="A Exercise Program Builder, built with React and Apollo Client and GraphQL to interact with the server-side API"
            githubLink="https://github.com/Pilotguide9897/FitBuilder"
          />

          <PortfolioCard
            title="English Football Tracker"
            description="Non-Premier League statistics tracker built using Vanilla Javascript"
            githubLink="https://github.com/roseandlily33/englishFootballTracker32"
          />

          <PortfolioCard
            title="Super Budget Tracker"
            description="A Budget Tracker built using NodeJS and HandleBars"
            githubLink="https://github.com/Valerigionetnoel/Budget-tracker"
          />
        </div>
      </div>
    </>
  )
}
