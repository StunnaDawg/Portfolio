import rehabDummyShot from "../assets/RehabTestScreenShot.png"
import profilePic from "../assets/IMG_8499.png"

const ProjectInfo = ({ title, description }) => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col">
          <div className="m-3">
            <h1 className="font-bold text-3xl">{title}</h1>
            <img />
          </div>
          <div>{description}</div>
        </div>
      </div>
    </>
  )
}

export default ProjectInfo
