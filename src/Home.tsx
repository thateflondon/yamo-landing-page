import React, {FC} from 'react';
import {Header} from './components/Header/Header';
import "../src/styles/pages/Home/Home.css";
// import { Hero } from './components/Header/Hero';

const App: FC = () => {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
