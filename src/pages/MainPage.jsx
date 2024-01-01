import githubLogo from "../assets/github-mark/github-mark-white.png"
import linkedInLogo from "../assets/LinkedIn-Logos/LI-In-Bug.png"
import xLogo from "../assets/x-logo/logo-white.png"

export const MainPage = () => {
  return (
    <>
      <div className=" flex-1 flex flex-col content-center items-center pt-24 pb-24 bg-sky-600">
        <div>Jonson Allen</div>
      </div>
      <div className=" flex-1 flex flex-col content-center items-center">
        <h1 className="text-3xl font-bold my-8">Hey!</h1>
        <p className="mx-48 text-center mb-6">
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
