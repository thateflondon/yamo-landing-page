// import React from "react";
import Navbar from "./Navbar";

import * as React from 'react';
import { Hero } from "./Hero";



export const Header = () => {
  return (
    <div>
      <Navbar
      navbarSignIn = "Sign In"
      navbarSignUp = "Sign Up"
      />
      <Hero
       mainTextOrder = 'You order,'
       mainTextDeliver = 'We deliver.' 
       signInText = 'Sign in and place your order'
      />
    </div>
  );
}
