import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/Navigation";
import Authentication from "./components/routes/authentication/Authentication";

const Shop = () => {
  return (
    <h1>
      I am the shop page
    </h1>
  )
}

const App = () =>  {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/sign-in" element={<Authentication/>}/>
      </Route>
    </Routes>
  )
}

export default App;
