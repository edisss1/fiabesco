import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"

const Router = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </HashRouter>
  )
}
export default Router