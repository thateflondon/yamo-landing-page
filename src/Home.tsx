import React, {FC} from 'react';
import {Header} from './components/Header/Header';
import "../src/styles/pages/Home/Home.css";
import {Body} from './components/Body/Body';

const App: FC = () => {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
