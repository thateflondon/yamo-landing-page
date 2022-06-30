import * as React from 'react';
import Iphone from "../../assets/images/iphone.svg";
import Scoot from "../../assets/images/ScootScoot.svg";
import Storefront from "../../assets/images/Storefront.svg";
import '../../styles/pages/Home/Home.css';


export interface OfferData {
    mainTitle: string;
    secondaryTitle: string;
    buttonTitle: string;  
    
    mainTitleStoreFront: string;
    secondaryTitleStoreFront: string;
    buttonTitleStoreFront: string;

    mainTitleIphone: string;
    secondaryTitleIphone: string;
    buttonTitleIphone: string; 
}

export const Offer = ({mainTitle, secondaryTitle, buttonTitle, mainTitleStoreFront, secondaryTitleStoreFront, buttonTitleStoreFront, mainTitleIphone, secondaryTitleIphone, buttonTitleIphone }: OfferData) => {
  return (
    <div className='testing'>
      <div className="offerContainer">
        <div className="offerContainer__list">
            <div className="offerContainer__item">
                <img src={Scoot} alt="" className="item__image" />
                <div className="item__textWrapper">
                    <h2 className="item__title">{mainTitle}</h2>
                    <h3 className="item__subtitle">{secondaryTitle}</h3>
                    <a href="www.jfpl.fr" className="item__link">{buttonTitle}</a>
                </div>
                
            </div>
            <div className="offerContainer__item">
                <img src={Storefront} alt="" className="item__image" />
                <div className="item__textWrapper">
                    <h2 className="item__title">{mainTitleStoreFront}</h2>
                    <h3 className="item__subtitle">{secondaryTitleStoreFront}</h3>
                    <a href="www.jfpl.fr" className="item__link">{buttonTitleStoreFront}</a>
                </div>
            </div>
            <div className="offerContainer__item">
                <img src={Iphone} alt="" className="item__image" />
                <div className="item__textWrapper">
                    <h2 className="item__title">{mainTitleIphone}</h2>
                    <h3 className="item__subtitle">{secondaryTitleIphone}</h3>
                    <a href="www.jfpl.fr" className="item__link">{buttonTitleIphone}</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
