import { Link, Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"

export const NavBar = () => {
  const { state } = useNavigation()
  const isLoading = state === "loading"

  return (
    <>
      <div className="flex flex-row justify-center font-bold pt-4 text-3xl bg-sky-600">
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
