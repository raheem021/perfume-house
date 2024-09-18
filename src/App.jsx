import './App.css';
import SignIn from './Auth/SignIn';
import Signup from './Auth/Signup';
import Navbar from './layouts/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
        <Route path="/"element={<Home/>}/>
        </Route>

        <Route path="/auth/signin"element={<SignIn/>}/>
        <Route path="/auth/signup"element={<Signup/>}/>


      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
