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

const TableScene = createReactClass({
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
          position={[0, -1, -1]}
          dragType="FixedToWorld"
          onDrag={() => {}}>
          <Viro3DObject
            source={require('./res/Wood_Table.obj')}
            position={[0, 0, 0]}
            scale={[0.7, 0.7, 0.7]}
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
