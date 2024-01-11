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
            <img
              src={profilePic}
              className="rounded-full w-48 h-48 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72"
            ></img>
          </div>

          <div className="mt-14 text-center mx-3">
            <h1 className="text-3xl font-bold pb-4 xl:text-5xl 2xl:text-6xl">
              Jonson Allen
            </h1>
            <h2 className="text-2xl font-bold lg:text-3xl">
              FullStack Web/Mobile Developer
            </h2>
          </div>
        </div>
        <div className="flex-1 flex flex-col content-center items-center 2xl:mx-96 2xl:my-8">
          <h1 className="text-3xl font-bold my-6 xl:text-5xl 2xl:text-6xl">
            Hey!
          </h1>
          <p className="mx-10  md:mx-48 text-center mb-7 text-xl font-semibold xl:text-2xl 2xl:text-3xl mx">
            My name is Jonson! I am a Typescript/Javascript Developer who enjoys
            Web Development and Mobile Development! I enjoy working on the
            FrontEnd, but am proficient in Backend Development as well!
          </p>
        </div>

        <div className="flex-1 flex flex-col content-center md:flex-row md:justify-center">
          <div className="flex-1 flex flex-col content-center items-center bg-black pt-10 pb-10 md:flex-row md:justify-center md:pt-48 md:pb-48 2xl:pb-80 2xl:pt-80">
            {" "}
            <a href="https://github.com/StunnaDawg">
              <img
                src={githubLogo}
                alt="GitHub Link"
                className="w-32 h-32 2xl:w-64 2xl:h-64"
              />
            </a>
          </div>
          <div className="flex-1 flex flex-col content-center items-center bg-white pt-10 pb-10 md:flex-row  md:justify-center md:pt-48 md:pb-48 2xl:pb-80 2xl:pt-80">
            <a href="https://www.linkedin.com/in/jonson-allen-56a29227a/">
              <img
                src={linkedInLogo}
                alt="LinkedIn Link"
                className="h-32 2xl:h-64"
              />
            </a>
          </div>
          <div className="flex-1 flex flex-col content-center items-center bg-black  pt-10 pb-10 md:flex-row  md:justify-center md:pt-48 md:pb-48 2xl:pb-80 2xl:pt-80">
            <a href="https://twitter.com/StunnaDawg">
              <img
                src={xLogo}
                alt="X Link"
                className="w-32 h-32 2xl:w-64 2xl:h-64 pt"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
