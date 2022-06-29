import * as React from 'react';
// import HeroBanner from '../../assets/images/HERO_banner.jpg';

export interface HeroData {
    mainTextOrder: string;
    mainTextDeliver: string;
    signInText: string;

    // heroBanner: string;

}

export const Hero = ({mainTextOrder, mainTextDeliver, signInText}: HeroData) => {
  return (
    <div className='heroContainer'>
        <div className="heroContainer__wrapper">
            <h1 className="heroContainer__text">
                <span className='heroContainer__order'>{mainTextOrder}</span>
            </h1><br/>
            <h1 className="heroContainer__text">
                <span className='heroContainer__deliver'>{mainTextDeliver}</span>
            </h1>
            <a href="www.jfpl.fr" className="heroContainer__signInText">{signInText}</a>
            {/* <img src={HeroBanner} alt="Hero Banner" className="heroContainer__banner" /> */}
        </div>
      
    </div>
  );
}
