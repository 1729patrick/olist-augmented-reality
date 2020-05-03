import React from 'react';

import {
  ViroARScene,
  ViroMaterials,
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
      animate: false,
    };
  },
  render() {
    return (
      <ViroARScene>
        <ViroARImageMarker
          target="target"
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
            source={require('../../assets/objects/watch/DigitalWatch_v1_Iteration2.obj')}
            rotation={[180, 135, 0]}
            type="OBJ"
            resources={[
              require('../../assets/objects/watch/DigitalWatch_v1_Iteration2_m.mtl'),
              require('../../assets/objects/watch/DigitalWatch_v1_Diffuse.jpg'),
            ]}
            materials="watch"
            animation={{ name: 'scale', run: this.state.animate }}
          />
        </ViroARImageMarker>
      </ViroARScene>
    );
  },
  _onAnchorFound() {
    this.setState({
      animate: true,
    });
  },
});

ViroMaterials.createMaterials({
  watch: {
    shininess: 2.0,
    lightingModel: 'Blinn',
    diffuseTexture: require('../../assets/objects/watch/DigitalWatch_v1_Diffuse.jpg'),
  },
});

ViroARTrackingTargets.createTargets({
  target: {
    source: require('../../assets/objects/watch/target.jpg'),
    orientation: 'Right',
    physicalWidth: 0.1,
  },
});

ViroAnimations.registerAnimations({
  scale: {
    properties: {
      scaleX: 0.005,
      scaleY: 0.005,
      scaleZ: 0.005,
    },
    duration: 500,
    easing: 'bounce',
  },
});

module.exports = WatchScene;
