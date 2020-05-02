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
  ViroDirectionalLight,
} from 'react-viro';

const createReactClass = require('create-react-class');

const TableScene = createReactClass({
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
        <ViroDirectionalLight color="#aaaaaa" direction={[0, 0, -1.0]} />

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

        <ViroNode
          position={[0, 0, -1]}
          dragType="FixedToWorld"
          onDrag={() => {}}>
          <Viro3DObject
            source={require('./res/Wood_Table.obj')}
            position={[0, 0.1, 0]}
            scale={[0.3, 0.3, 0.3]}
            type="OBJ"
            resources={[require('./res/Wood_Table.mtl')]}
            materials="table"
          />
        </ViroNode>
      </ViroARScene>
    );
  },
});

ViroMaterials.createMaterials({
  table: {
    lightingModel: 'PBR',
    diffuseTexture: require('./res/Wood_Table_C_2.jpg'),
    metalnessTexture: require('./res/Wood_Table_C.jpg'),
    roughnessTexture: require('./res/Wood_Table_N.jpg'),
  },
});

module.exports = TableScene;
