import { Link, Outlet, useNavigation } from "react-router-dom"

export const NavBar = () => {
  const { state } = useNavigation()
  const isLoading = state === "loading"

  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col">
          <div>Jonson Allen</div>
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
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  )
}
