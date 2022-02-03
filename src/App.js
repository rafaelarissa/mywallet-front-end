import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

export default function App() {
  // const tokenOnLocalStorage = localStorage.getItem("token");
  // const imageOnLocalStorage = localStorage.getItem("image");
  // const [token, setToken] = useState(tokenOnLocalStorage);
  // const [image, setImage] = useState(imageOnLocalStorage);

  // function setAndPersistToken(token) {
  //      setToken(token);
  //      localStorage.setItem("token", token);
  // }

  // function setAndPersistUser(image) {
  //      setImage(image);
  //      localStorage.setItem("image", image);
 
  // }

  return (
       <TokenContext.Provider value={{ token, setToken, setAndPersistToken }}>
            <UserContext.Provider value={{ image, setImage, setAndPersistUser, progress, setProgress }}>
                 <BrowserRouter>
                      <Routes>
                           <Route path="/" element={<LoginPage />} />
                           <Route path="/cadastro" element={<SignUpPage />} />
                           {/* <Route path="/habitos" element={<HabitsPage />} />
                           <Route path="/hoje" element={<TodayPage />} />
                           <Route path="/historico" element={<HistoryPage />} /> */}
                      </Routes>
                 </BrowserRouter>
            </UserContext.Provider>
       </TokenContext.Provider>
  );
}