import { Link } from "react-router-dom"

export const PortfolioCard = ({ title, description, githubLink, readLink }) => {
  return (
    <div className="my-8 mx-10 border-4 p-8 md:mx-64">
      <div className="m-9">
        <h1 className="text-3xl font-bold underline">{title}</h1>
      </div>
      <div className="flex flex-row justify-center my-2">
        <p className="text-center">{description}</p>
      </div>

      <div className="flex flex-row justify-end mx-2">
        <div className="flex flex-col">
          <a href={githubLink}>
            <button>Link to GitHub</button>
          </a>
          <button>
            <Link to={readLink}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
