import { Routes,Route } from "react-router-dom";

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignIn from "./_auth/form/SignIn";
import SignUp from "./_auth/form/SignUp";
import { Home } from "./_root/pages";
import "./global.css";
const App = () => {
  return (
    <>
    
    <main className="flex h-screen">
        <Routes>
              {/* Public routes */}
              <Route element={<AuthLayout/>}>
                 <Route path="/sign-in" element={<SignIn/>}/>
                 <Route path="/sign-up" element={<SignUp/>}/>
              </Route>
              {/* Private routes */}
              <Route element={<RootLayout/>}>
               <Route index element={<Home/>}/>
              </Route>
        </Routes>
    </main>
    </>
  )
}

export default App