import React from "react"
import HomePage from "./pages/home"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeBody from "./pages/homebody";


function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<HomeBody />} />
          </Route>
        </Routes>

      </Router>

    </>
  )
}

export default App
