import * as React from 'react';
import { Offer } from './Offer';


export const Body = () => {
  return (
    <div>
      <Offer
       mainTitle="Become a Yamô"
      secondaryTitle="As a delivery driver, you'll make reliable money—working anytime, anywhere."
      buttonTitle="Start earning" 
      mainTitleStoreFront={'Become a Partner'}
      secondaryTitleStoreFront={'Grow your business and reach new customers by partnering with us.'} 
      buttonTitleStoreFront={'Sign up your restaurant'} 
      mainTitleIphone={'Try the App'} 
      secondaryTitleIphone={'From your favorite restaurant to you in 30 minutes'} 
      buttonTitleIphone={'Get the app'}      
    />
    </div>
  );
}
