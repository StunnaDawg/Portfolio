import githubLogo from "../assets/github-mark/github-mark-white.png"
import linkedInLogo from "../assets/LinkedIn-Logos/LI-In-Bug.png"
import xLogo from "../assets/x-logo/logo-white.png"
import profilePic from "../assets/IMG_8499.png"

export const MainPage = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className=" flex-1 flex flex-col content-center items-center pt-8 pb-8 bg-sky-600">
          <div>
            <img src={profilePic} className="rounded-full w-48 h-48"></img>
          </div>

          <div className="mt-14">
            <p className="text-3xl font-bold pb-4 lg:text-6xl">Jonson Allen</p>
            <p className="text-2xl font-bold lg:text-3xl">
              FullStack Web/Mobile Developer
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col content-center items-center 2xl:mx-96">
          <h1 className="text-3xl font-bold my-6 lg:text-6xl">Hey!</h1>
          <p className="mx-10  md:mx-48 text-center mb-6 text-xl font-semibold lg:text-3xl mx">
            My name is Jonson! I am a Typescript/Javascript Developer who enjoys
            Web Development and Mobile Development! I enjoy working on the
            FrontEnd, but am proficient in Backend Development as well!
          </p>
        </div>

        <div className="flex-1 flex flex-col content-center md:flex-row md:justify-center">
          <div className="flex-1 flex flex-col content-center items-center bg-black pt-10 pb-10 md:flex-row md:justify-center md:pt-32 md:pb-32 xl:pb-80 xl:pt-80">
            {" "}
            <a href="https://github.com/StunnaDawg">
              <img
                src={githubLogo}
                alt="GitHub Link"
                className="w-32 h-32 xl:w-64 xl:h-64"
              />
            </a>
          </div>
          <div className="flex-1 flex flex-col content-center items-center bg-white pt-10 pb-10 md:flex-row  md:justify-center md:pt-32 md:pb-32 xl:pb-80 xl:pt-80">
            <a href="https://www.linkedin.com/in/jonson-allen-56a29227a/">
              <img
                src={linkedInLogo}
                alt="LinkedIn Link"
                className="h-32 xl:h-64"
              />
            </a>
          </div>
          <div className="flex-1 flex flex-col content-center items-center bg-black  pt-10 pb-10 md:flex-row  md:justify-center md:pt-32 md:pb-32 xl:pb-80 xl:pt-80">
            <a href="https://twitter.com/StunnaDawg">
              <img
                src={xLogo}
                alt="X Link"
                className="w-32 h-32 xl:w-64 xl:h-64 pt"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
