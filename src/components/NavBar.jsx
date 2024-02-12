import { Link, Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"

export const NavBar = () => {
  const { state } = useNavigation()
  const isLoading = state === "loading"

  return (
    <>
      <div className="flex flex-row justify-center font-bold pt-4 pb-3 text-3xl xl:text-4xl 2xl:text-5xl 2xl:pb-4 bg-sky-600 border-b-2 border-black">
        <div>
          <Link to="about">About</Link>
        </div>
        <div className="mx-2">|</div>
        <div>
          <Link to="projects">Projects</Link>
        </div>
      </div>
      <div className={`${isLoading ? "loading" : ""}`}>
        <Outlet className="h-screen" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
