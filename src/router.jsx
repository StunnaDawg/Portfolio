import { Navigate, createBrowserRouter } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { MainPage } from "./pages/MainPage"
import { PortfolioPage } from "./pages/PortfolioPage"
import { PortfolioView } from "./pages/PortfolioView"

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
            children: [
              { path: "project-1", element: <PortfolioView /> },
              { path: "project-2", element: <PortfolioView /> },
              { path: "project-3", element: <PortfolioView /> },
              { path: "project-4", element: <PortfolioView /> },
              { path: "project-5", element: <PortfolioView /> },
            ],
          },
        ],
      },
    ],
  },
])
