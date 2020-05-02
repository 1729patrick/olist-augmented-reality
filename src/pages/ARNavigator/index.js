import React, { useMemo } from 'react';
import { ViroARSceneNavigator } from 'react-viro';

import { getScene } from '../../services/api';

const ARNavigator = ({ route }) => {
  const scene = useMemo(() => {
    const { productId } = route.params;

    return getScene({ productId });
  }, [route.params, getScene]);

  return <ViroARSceneNavigator initialScene={{ scene }} />;
};

export default ARNavigator;
