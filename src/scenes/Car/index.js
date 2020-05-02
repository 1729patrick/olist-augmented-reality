import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  ViroAnimations,
  Viro3DObject,
  ViroLightingEnvironment,
  ViroSphere,
  ViroSpotLight,
  ViroQuad,
} from 'react-viro';

const createReactClass = require('create-react-class');

const CarScene = createReactClass({
  getInitialState() {
    return {
      texture: 'white',
      playAnim: true,
      animateCar: true,
      tapWhite: false,
      tapBlue: false,
      tapGrey: false,
      tapRed: false,
      tapYellow: false,
    };
  },

  render() {
    return (
      <ViroARScene>
        <ViroLightingEnvironment source={require('./res/garage_1k.hdr')} />
        <ViroNode
          position={[0, 0, -1]}
          dragType="FixedToWorld"
          onDrag={() => {}}>
          <Viro3DObject
            source={require('./res/object_car.obj')}
            position={[0, 0.1, 0]}
            scale={[0.2, 0.2, 0.2]}
            type="OBJ"
            resources={[require('./res/object_car.mtl')]}
            materials="white"
          />
        </ViroNode>

        <ViroSpotLight
          innerAngle={5}
          outerAngle={25}
          direction={[0, 0, -1]}
          position={[0, 5, 1]}
          color="#ffffff"
          castsShadow
          shadowMapSize={2048}
          shadowNearZ={2}
          shadowFarZ={7}
          shadowOpacity={0.7}
        />
      </ViroARScene>
    );
  },
});

ViroMaterials.createMaterials({
  white: {
    lightingModel: 'PBR',
    diffuseTexture: require('./res/object_car_main_Base_Color.png'),
    metalnessTexture: require('./res/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/object_car_main_Roughness.png'),
  },
});

module.exports = CarScene;
