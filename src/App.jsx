import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/signin";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}> </Route>
          <Route path="/signin" element={<Signin />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
