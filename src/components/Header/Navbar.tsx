import {FC} from 'react';
import Logo from '../../../src/logo.svg';
import * as React from 'react';

export interface NavbarData {
  navbarSignIn: string;
  navbarSignUp: string;
  //fonction type:
  // getName: (name: string) => string;
}

// const logoStyle = {
//   width: 40px;
//   height: 40px;
// }

export const Navbar = ({navbarSignIn, navbarSignUp}: NavbarData) => {
  return (
    <div>
      <div className = "navbarHeader">
        <div className="navbarHeader__logoBox" >
          <img src={Logo} alt="Yamo official logo"/>
        </div>
        <div className="signInUpBox">
          <div className="signInUpBox__links">
            <button className='signInUpBox__signIn'>{navbarSignIn}</button>
            <button className='signInUpBox__signUp'>{navbarSignUp}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;