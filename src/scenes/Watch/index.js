import React from 'react';

import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  ViroSpotLight,
  ViroAmbientLight,
  Viro3DObject,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroAnimations,
} from 'react-viro';

const createReactClass = require('create-react-class');

const WatchScene = createReactClass({
  getInitialState() {
    return {
      texture: 'white',
      playAnim: false,
      animateCar: false,
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
        <ViroARImageMarker
          target="logo"
          onAnchorFound={this._onAnchorFound}
          pauseUpdates={this.state.pauseUpdates}>
          <ViroAmbientLight color="#aaaaaa" influenceBitMask={1} />

          <ViroSpotLight
            innerAngle={5}
            outerAngle={45}
            direction={[0, -1, -0.2]}
            position={[0, 3, 0]}
            color="#ffffff"
            castsShadow
            influenceBitMask={4}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={5}
            shadowOpacity={0.7}
          />

          <Viro3DObject
            source={require('./res/DigitalWatch_v1_Iteration2.obj')}
            scale={[0.01, 0.01, 0.01]}
            rotation={[180, 45, 0]}
            type="OBJ"
            resources={[
              require('./res/DigitalWatch_v1_Iteration2.mtl'),
              require('./res/DigitalWatch_v1_Diffuse.jpg'),
            ]}
            materials="watch"
            animation={{ name: 'scaleCar', run: this.state.animateCar }}
          />
        </ViroARImageMarker>
      </ViroARScene>
    );
  },
  _onAnchorFound() {
    this.setState({
      animateCar: true,
    });
  },
});

ViroMaterials.createMaterials({
  watch: {
    shininess: 2.0,
    lightingModel: 'Blinn',
    diffuseTexture: require('./res/DigitalWatch_v1_Diffuse.jpg'),
  },
});

ViroARTrackingTargets.createTargets({
  logo: {
    source: require('./res/target.jpg'),
    orientation: 'Right',
    physicalWidth: 0.1, // real world width in meters
  },
});

ViroAnimations.registerAnimations({
  scaleUp: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
    duration: 500,
    easing: 'bounce',
  },
  scaleDown: { properties: { scaleX: 0, scaleY: 0, scaleZ: 0 }, duration: 200 },
  scaleCar: {
    properties: { scaleX: 0.01, scaleY: 0.01, scaleZ: 0.01 },
    duration: 500,
    easing: 'bounce',
  },
  scaleSphereUp: {
    properties: { scaleX: 0.8, scaleY: 0.8, scaleZ: 0.8 },
    duration: 50,
    easing: 'easeineaseout',
  },
  scaleSphereDown: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
    duration: 50,
    easing: 'easeineaseout',
  },
  tapAnimation: [['scaleSphereUp', 'scaleSphereDown']],
});

module.exports = WatchScene;
