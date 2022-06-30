// import {FC} from 'react';
import Logo from '../../../src/assets/images/home/YAMO_logo_new_design.svg';
import * as React from 'react';

export interface NavbarData {
  navbarSignIn: string;
  navbarSignUp: string;
  //fonction type:
  // getName: (name: string) => string;
}

export const Navbar = ({navbarSignIn, navbarSignUp}: NavbarData) => {
  return (
    <div>
      <div className = "navbarHeader">
        <div className="navbarHeader__logoBox" >
          <img src={Logo} alt="Yamo official logo"/>
        </div>
        <div className="signInUpBox">
          <div className="signInUpBox__links">
            <a style={{padding: "10px"}} href='www.jfpl.fr' className='signInUpBox__signIn'>{navbarSignIn}</a>
            <a style={{padding: "10px"}} href='www.jfpl.fr' className='signInUpBox__signUp'>{navbarSignUp}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;