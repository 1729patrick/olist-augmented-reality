import React from 'react';

import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  Viro3DObject,
  ViroSpotLight,
  ViroAmbientLight,
} from 'react-viro';

const createReactClass = require('create-react-class');

const TVScene = createReactClass({
  render() {
    return (
      <ViroARScene>
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

        <ViroNode
          position={[0, 0, -1]}
          dragType="FixedToWorld"
          onDrag={() => {}}>
          <Viro3DObject
            source={require('./res/tv.obj')}
            position={[0, 0, 0]}
            scale={[0.1, 0.1, 0.1]}
            type="OBJ"
            resources={[
              require('./res/tv_diffuse.png'),
              require('./res/tv_specular.png'),
            ]}
            materials="tv"
          />
        </ViroNode>
      </ViroARScene>
    );
  },
});

ViroMaterials.createMaterials({
  tv: {
    shininess: 2.0,
    lightingModel: 'Blinn',
    diffuseTexture: require('./res/tv_diffuse.png'),
    specularTexture: require('./res/tv_specular.png'),
  },
});

module.exports = TVScene;
