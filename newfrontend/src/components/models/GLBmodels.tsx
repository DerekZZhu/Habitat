import React from 'react';
import {useGLTF} from '@react-three/drei/core';

export default function GLBModel({modelPath, ...rest}: any) {
  const gltf = useGLTF(modelPath);
  return <primitive object={gltf.scene} {...rest} />;
}
