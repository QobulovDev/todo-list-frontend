import { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(()=>import('./pages/home/home'));
const Login = lazy(()=>import('./pages/auth/login'));
const Regis = lazy(()=>import('./pages/auth/regis'));

function App() {
  const [userToken, setUserToken] = useState(window.localStorage.getItem("authToken"));
  const [user, setUser] = useState({})
  return (
      <>
          <Suspense fallback={<>Loading...</>}>
            <ToastContainer/>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={
                  (userToken)?
                    <Home user={user} setUser={setUser} setUserToken={setUserToken}/>:
                    <Login setUserToken={setUserToken} setUser={setUser}/>
                }/>
                <Route path='/login' element={<Login setUserToken={setUserToken} setUser={setUser}/>}/>
                <Route path='/regis' element={<Regis setUserToken={setUserToken} setUser={setUser}/>}/>
              </Routes>
            </BrowserRouter>
          </Suspense>
      </>
  )
}

export default App
