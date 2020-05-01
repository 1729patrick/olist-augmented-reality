import React from 'react';
import { ViroARSceneNavigator } from 'react-viro';

const ARNavigator = ({ scene }) => {
  return <ViroARSceneNavigator initialScene={{ scene }} />;
};

export default ARNavigator;
