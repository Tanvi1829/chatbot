import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Loading_Done from './Pages/OnBoarding/Loading Done/Loading_Done';
import Introduce_Step_1 from './Pages/OnBoarding/Introduce Step 1/Introduce_Step_1';
import Introduce_Step_2 from './Pages/OnBoarding/Introduce Step 2/Introduce_Step_2';
import Introduce_Step_3 from './Pages/OnBoarding/Introduce_Step_3/Introduce_Step_3';
import Introduce_Step_4 from './Pages/OnBoarding/Introduce Step 4/Introduce_Step_4';
import Login_Empty from './Pages/Login/Login Empty/Login_Empty';
import Get_OTP from './Pages/Login/Get OTP/Get_OTP';
import Register from "./Pages/Sign Up/Register/Register";
import UserInfo from './Pages/Sign Up/UserInfo/UserInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Loading_Done/>} />
          <Route path='/introduce_step_1' element={<Introduce_Step_1/>} />
          <Route path='/introduce_step_2' element={<Introduce_Step_2/>} />
          <Route path='/introduce_step_3' element={<Introduce_Step_3/>} />
          <Route path="/introduce_step_4" element={<Introduce_Step_4/>} />
          <Route path='/login_empty' element={<Login_Empty/>} /> 
          <Route path='/register' element={<Register/>} /> 
          <Route path='/userinfo' element={<UserInfo/>} />
          {/* <Route path='/get_otp' element={<Get_OTP/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
