import Section from "./ProjectInfoSection"

const ProjectInfo = ({
  title,
  projectDescription,
  challengeDescription,
  roleDescription,
  toolsDescription,
  imageLink1,
  imageLink2,
  imageLink3,
}) => {
  return (
    <>
      <div className=" flex flex-row justify-center p-7 bg-sky-600">
        <h1 className="font-bold text-3xl">{title}</h1>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col p-6">
          <Section
            title={"Description"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum, nisl quis mattis sodales, mauris libero aliquet lacus, id viverra elit mi a mauris. In malesuada velit dapibus interdum viverra. Morbi vel ipsum fringilla, aliquam felis at, euismod enim. Fusce elementum at neque vel maximus. Vivamus ut velit tortor. Duis dapibus congue pellentesque. Aenean feugiat vulputate nisi, et blandit leo pulvinar in."
            }
          />

          <Section title={"Role"} content={"Lorem ipsum dolor sit amet"} />

          <Section
            title={"Tools Used"}
            content={
              "Lorem ipsum dolor sit amet. In malesuada velit dapibus interdum viverra.< Morbi vel ipsum fringilla, aliquam felis at, euismod enim. Fusce elementum at neque vel maximus. Vivamus ut velit tortor. Duis dapibus congue pellentesque. Aenean feugiat vulputate nisi, et blandit leo pulvinar in."
            }
          />

          <Section
            title={"Challenges"}
            content={
              "Lorem ipsum dolor sit amet. In malesuada velit dapibus interdum viverra. Morbi vel ipsum fringilla, aliquam felis at, euismod enim. Fusce elementum at neque vel maximus. Vivamus ut velit tortor. Duis dapibus congue pellentesque. Aenean feugiat vulputate nisi, et blandit leo pulvinar in."
            }
          />

          {/*             
          <div className=" mb-2">
            <h1 className="font-bold text-sm mb-3">Description</h1>
            <div>
              <p className="text-xs">{projectDescription}</p>
            </div>
          </div> */}

          {/* Images */}
          <div className=" flex flex-row justify-center">
            <h1 className="font-bold text-sm mb-3">ScreenShots</h1>
          </div>

          <div className="flex md:flex-row md:justify-center flex-col mb-3">
            <div className="md:mx-2 my-2">
              <img className="w-48" src={imageLink1} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectInfo
