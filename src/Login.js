import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import 'react-calendar/dist/Calendar.css';
import Home from "./Home";
function Login() {

  return (
    <div>
      <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={Home}
    onFailure={()=>{
    console.log("ERROR")}
    }
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default Login;