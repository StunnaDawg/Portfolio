import Section from "./ProjectInfoSection"
import ImgCarousel from "./ImgCarosuel"
import githubLogo from "../assets/github-mark/github-mark.png"

const ProjectInfo = ({
  title,
  projectDescription,
  challengeDescription,
  roleDescription,
  toolsDescription,
  imageLink1,
  imageLink2,
  imageLink3,
  status,
  gitHub,
  liveLink,
}) => {
  return (
    <>
      <div className="min-h-screen">
        <div className=" flex flex-col items-center p-7 bg-sky-600">
          <div className="flex flex-row justify-center items-center">
            <h1 className="font-bold text-3xl lg:text-5xl mx-4">{title}</h1>
            <a href={gitHub}>
              <button>
                <img src={githubLogo} className="w-12" />
              </button>
            </a>
          </div>
          <h3 className="text-xl font-semibold">Status: {status}</h3>
          {liveLink ? (
            <a href={liveLink} className="underline">
              Production Link
            </a>
          ) : null}
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col p-6">
            <div className="mb-4">
              <Section title={"Description"} content={projectDescription} />
            </div>

            <div className="mb-4">
              <Section title={"Role"} content={roleDescription} />
            </div>

            <div className="mb-4">
              <Section title={"Tools Used"} content={toolsDescription} />
            </div>

            <div className="mb-4">
              <Section title={"Challenges"} content={challengeDescription} />
            </div>
            <div className=" flex flex-row justify-center mb-6">
              <h1 className="font-bold text-2xl lg:text-4xl ">ScreenShots</h1>
            </div>
            <div className="items-center">
              <ImgCarousel
                image1={imageLink1}
                image2={imageLink2}
                image3={imageLink3}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectInfo
