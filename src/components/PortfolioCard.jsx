import { Link } from "react-router-dom"
import githubLogo from "../assets/github-mark/github-mark.png"

export const PortfolioCard = ({
  title,
  description,
  githubLink,
  readLink,
  imgLink,
  imgAlt,
}) => {
  return (
    <div className=" flex flex-col my-8 mx-10 border-4 2xl:p-8 md:mx-64 2xl:mx-96 items-center">
      <div className=" flex flex-row mt-9 mb-3 text-center items-center">
        <h1 className="text-3xl 2xl:text-5xl font-bold underline mx-2">
          {title}
        </h1>
        <a href={githubLink}>
          <img src={githubLogo} className="w-12 2xl:w-16" />
        </a>
      </div>
      <div>
        <img src={imgLink} alt={imgAlt} />
      </div>
      <div className="my-2">
        <p className="text-center text-xl 2xl:text-3xl px-16 font-semibold">
          {description}
        </p>
      </div>

      <div className="flex flex-row justify-end mx-2">
        <div className="flex flex-col">
          <button className="underline xl:text-lg 2xl:text-xl">
            <Link to={`${readLink}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
