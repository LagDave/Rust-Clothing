import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/Navigation";
import Authentication from "./components/routes/authentication/Authentication";
import Shop from "./components/routes/shop/Shop";
import Checkout from "./components/routes/checkout/Checkout";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import { setCurrentUser  } from "./store/user/user.action";

const App = () =>  {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    /** useEffect will run code that it returns when it unmounts   */
    return unsubscribe;
  }, [dispatch]);
 
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="/shop/*" element={<Shop/>}/>
        <Route path="/sign-in" element={<Authentication/>}/>
        <Route path="/checkout" element={<Checkout/>} />
      </Route>
    </Routes>
  )
}

export default App;
