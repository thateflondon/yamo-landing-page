import '../../styles/pages/Home/Home.css';

import * as React from 'react';

export interface IHowItWorksProps {
    mainTitle: string;
    secondaryTitle: string;
}

export const HowItWorks = ({mainTitle, secondaryTitle}: IHowItWorksProps) => {
  return (
    <div className="how-it-works-wrapper">
        <div className="how-it-works-wrapper__text">
            <div className="main-title">
                <h4>{mainTitle}</h4>
            </div>
            <div className="secondary-title">
                <h5>{secondaryTitle}</h5>
            </div>
        </div>
      
    </div>
  );
}
