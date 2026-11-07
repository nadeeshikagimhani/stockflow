import { routes } from "@/data/route"
import { Navigate, Route, Routes } from "react-router-dom"

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(( { route, page }) => (
        <Route key={route} path={route} element={page}/>
      ))}

      <Route 
      path="*" 
      element=
      {<Navigate to="/not-found" 
      replace/>
      }/>
    </Routes>
  )
}

export default AppRouter