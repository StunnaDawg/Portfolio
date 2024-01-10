import ProjectInfo from "../../components/ProjectInfo"

const SuperBudgetTracker = () => {
  return (
    <>
      <ProjectInfo
        title="Super Budget Tracker"
        projectDescription="Super Budget Tracker is a finance tracking app. After Sign Up/Login users can create a budget, and add transactions. The Charts will correlating to your spending comapred to your budget. You can also add Categories to your transactions, so you can keep track of your
        spending in different categories and compare! *Note* The Heroku Deployment is not avalible at the moment"
        challengeDescription="Rendering Charts utilizing ChartJS was a challenge at first. Utilzing the data input by the user and sending that information to the chart to render was a tough task for me as it was My first Project working on both the FrontEnd and BackEnds. 
        Though through reading the ChartJS document I was able to eventually achieve my desired output consistently."
        roleDescription="FrontEnd, BackEnd, Page Rendering using HanldeBars"
        toolsDescription="NodeJs, MySQL, Sequelize, TailwindCSS, Flowbite, ChartJS, HandleBars"
        status={"Complete"}
        gitHub={"https://github.com/Valerigionetnoel/Budget-tracker"}
      />
    </>
  )
}

export default SuperBudgetTracker
