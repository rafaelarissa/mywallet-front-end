import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/HomePage";
// import TokenContext from "./contexts/TokenContext";
// import UserContext from "./contexts/UserContext";

export default function App() {
//   const tokenOnLocalStorage = localStorage.getItem("token");
//   const imageOnLocalStorage = localStorage.getItem("image");
//   const [token, setToken] = useState(tokenOnLocalStorage);
//   const [image, setImage] = useState(imageOnLocalStorage);

//   function setAndPersistToken(token) {
//        setToken(token);
//        localStorage.setItem("token", token);
//   }

//   function setAndPersistUser(image) {
//        setImage(image);
//        localStorage.setItem("image", image);
//   }

  return (
     //   <TokenContext.Provider value={{ token, setToken, setAndPersistToken }}>
     //        <UserContext.Provider value={{ image, setImage, setAndPersistUser }}>
                 <BrowserRouter>
                      <Routes>
                           <Route path="/" element={<LoginPage />} />
                           <Route path="/sign-up" element={<SignUpPage />} />
                           <Route path="/home" element={<HomePage />} />
                           
                      </Routes>
                 </BrowserRouter>
     //        </UserContext.Provider>
     //   </TokenContext.Provider>
  );
}