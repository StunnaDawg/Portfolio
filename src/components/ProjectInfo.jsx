import Section from "./ProjectInfoSection"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

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
          <div className=" flex flex-row justify-center">
            <h1 className="font-bold text-sm mb-3">ScreenShots</h1>
          </div>

          <div className="flex flex-col items-center">
            <Carousel
              width={200}
              showArrows
              autoPlay
              useKeyboardArrows={true}
              showThumbs={false}
              ariaLabel="bg-red"
              interval={3000}
              infiniteLoop
            >
              <div>
                <img src={imageLink1} />
              </div>
              <div>
                <img src={imageLink2} />
              </div>
              <div>
                <img src={imageLink3} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectInfo
