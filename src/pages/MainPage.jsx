import githubLogo from "../assets/github-mark/github-mark-white.png"
import linkedInLogo from "../assets/LinkedIn-Logos/LI-In-Bug.png"
import xLogo from "../assets/x-logo/logo-white.png"
import profilePic from "../assets/IMG_8499.png"

export const MainPage = () => {
  return (
    <>
      <div className=" flex-1 flex flex-col content-center items-center pt-8 pb-8 bg-sky-600">
        <div>
          <img src={profilePic} className="rounded-full w-48 h-48"></img>
        </div>

        <div className="mt-14">
          <p className="text-3xl font-bold pb-4">Jonson Allen</p>
          <p className="text-2xl font-bold">FullStack Web/Mobile Developer</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col content-center items-center">
        <h1 className="text-3xl font-bold my-6">Hey!</h1>
        <p className="mx-10  md:mx-48 text-center mb-6 text-xl font-semibold">
          My name is Jonson! I am a Typescript/Javascript Developer who enjoys
          Web Development and Mobile Development! I enjoy working on the
          FrontEnd, but am proficient in Backend Development as well!
        </p>
      </div>

      <div className="flex-1 flex flex-col content-center md:flex-row md:justify-center">
        <div className="flex-1 flex flex-col content-center items-center bg-black pt-0 pb-0 md:flex-row md:justify-center md:pt-32 md:pb-32">
          {" "}
          <a href="https://github.com/StunnaDawg">
            <img src={githubLogo} alt="GitHub Link" className="w-32 h-32" />
          </a>
        </div>
        <div className="flex-1 flex flex-col content-center items-center bg-white pt-0 pb-0 md:flex-row  md:justify-center md:pt-32 md:pb-32">
          <a href="https://www.linkedin.com/in/jonson-allen-56a29227a/">
            <img src={linkedInLogo} alt="LinkedIn Link" className="h-32" />
          </a>
        </div>
        <div className="flex-1 flex flex-col content-center items-center bg-black  pt-0 pb-0 md:flex-row  md:justify-center md:pt-32 md:pb-32">
          <a href="https://twitter.com/StunnaDawg">
            <img src={xLogo} alt="X Link" className="w-32 h-32" />
          </a>
        </div>
      </div>
    </>
  )
}
