import { Navigate, createBrowserRouter } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { MainPage } from "./pages/MainPage"
import { PortfolioPage } from "./pages/PortfolioPage"
import HeadToHead from "./pages/ProjectPages/HeadToHead"
import RehabPlus from "./pages/ProjectPages/RehabPlus"
import PokeGuesser from "./pages/ProjectPages/PokeGuesser"
import FitBuilder from "./pages/ProjectPages/FitBuilder"
import SuperBudgetTracker from "./pages/ProjectPages/SuperBudger"
import FootballTracker from "./pages/ProjectPages/FootballTracker"

function ErrorPage() {
  // const error  = useRouteError()

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {/* {import.meta.env.MODE !== "production" && (
            <>
              <pre>{error.message}</pre>
              <pre>{error.stack}</pre>
            </>
          )} */}
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/about" /> },
          { path: "about", element: <MainPage /> },
          {
            path: "projects",
            element: <PortfolioPage />,
          },
          { path: "projects/rehabplus", element: <RehabPlus /> },
          { path: "projects/head-to-head", element: <HeadToHead /> },
          { path: "projects/pokeguesser", element: <PokeGuesser /> },
          { path: "projects/fit-builder", element: <FitBuilder /> },
          { path: "projects/football-tracker", element: <FootballTracker /> },
          {
            path: "projects/super-budget-tracker",
            element: <SuperBudgetTracker />,
          },
        ],
      },
    ],
  },
])
