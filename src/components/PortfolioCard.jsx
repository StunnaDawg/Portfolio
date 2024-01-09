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
    <div className="my-8 mx-10 border-4 p-8 md:mx-64">
      <div className="m-9">
        <h1 className="text-3xl font-bold underline">{title}</h1>
      </div>
      <div>
        <img src={imgLink} alt={imgAlt} />
      </div>
      <div className="flex flex-row justify-center my-2">
        <p className="text-center text-lg font-semibold">{description}</p>
      </div>

      <div className="flex flex-row justify-end mx-2">
        <div className="flex flex-col">
          <a href={githubLink}>
            <button>
              <img src={githubLogo} className="w-16" />
            </button>
          </a>
          <button className="underline">
            <Link to={`${readLink}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
