import githubLogo from "../assets/github-mark/github-mark-white.png"
import linkedInLogo from "../assets/LinkedIn-Logos/LI-In-Bug.png"
import xLogo from "../assets/x-logo/logo-white.png"

export const MainPage = () => {
  return (
    <>
      <div className=" flex-1 flex flex-col content-center items-center my-24">
        <div>Jonson Allen</div>
      </div>
      <div className=" flex-1 flex flex-col content-center items-center my-24">
        <div>About</div>
      </div>

      <div className="flex-1 flex flex-col content-center md:flex-row md:justify-center">
        <div className="flex-1 flex flex-col content-center items-center bg-black md:flex-row md:justify-center">
          {" "}
          <a href="https://github.com/StunnaDawg">
            <img src={githubLogo} alt="GitHub Link" className="w-32 h-32" />
          </a>
        </div>
        <div className="flex-1 flex flex-col content-center items-center bg-white md:flex-row  md:justify-center">
          <a href="https://www.linkedin.com/in/jonson-allen-56a29227a/">
            <img src={linkedInLogo} alt="LinkedIn Link" className="h-32" />
          </a>
        </div>
        <div className="flex-1 flex flex-col content-center items-center bg-black md:flex-row  md:justify-center">
          <a href="https://twitter.com/StunnaDawg">
            <img src={xLogo} alt="X Link" className="w-32 h-32" />
          </a>
        </div>
      </div>
    </>
  )
}
