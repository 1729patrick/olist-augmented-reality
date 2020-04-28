import React from 'react';
import { ViroARSceneNavigator } from 'react-viro';

import AR from './pages/AR';

const App = () => {
  return <ViroARSceneNavigator initialScene={{ scene: AR }} />;
};

export default App;
