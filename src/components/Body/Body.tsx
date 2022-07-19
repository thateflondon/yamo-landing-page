import * as React from 'react';
import { HowItWorks } from './HowItWorks';
import { Offer } from './Offer';


export const Body = () => {
  return (
    <div>
      <Offer
       mainTitle="Become a Yamô"
       secondaryTitle="As a delivery driver, you'll make reliable money working anytime, anywhere."
       buttonTitle="Start earning" 
       mainTitleStoreFront={'Become a Partner'}
       secondaryTitleStoreFront='Grow your business and reach new customers by partnering with us.' 
       buttonTitleStoreFront={'Sign up your restaurant'} 
       mainTitleIphone={'Try the App'} 
       secondaryTitleIphone={'From your favorite restaurants and shops to your home or office in only 30 minutes.'} 
       buttonTitleIphone={'Get the app'}      
    />
    <HowItWorks
    mainTitle='How It Works ?'
    secondaryTitle='It is very simple !'
    />
    </div>
  );
}
