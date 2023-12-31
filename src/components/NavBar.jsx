import { Link, Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"

export const NavBar = () => {
  const { state } = useNavigation()
  const isLoading = state === "loading"

  return (
    <>
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div>
              <Link to="about">About</Link>
            </div>

            <div>
              <Link to="projects">Projects</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${isLoading ? "loading" : ""} grow`}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
