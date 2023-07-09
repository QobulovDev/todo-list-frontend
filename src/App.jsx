import { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css'
const Home = lazy(()=>import('./pages/home/home'));
const Login = lazy(()=>import('./pages/auth/login'));
const Regis = lazy(()=>import('./pages/auth/regis'));

function App() {
  const [userToken, setUserToken] = useState(window.localStorage.getItem("authToken"));

  return (
      <>
          <Suspense fallback={<>Loadin...</>}>
            <ToastContainer/>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={
                  (userToken)?
                    <Home/>:
                    <Login setUserToken={setUserToken} q/>
                }/>
                <Route path='/login' element={<Login setUserToken={setUserToken} />}/>
                <Route path='/regis' element={<Regis setUserToken={setUserToken} />}/>
              </Routes>
            </BrowserRouter>
          </Suspense>
      </>
  )
}

export default App
