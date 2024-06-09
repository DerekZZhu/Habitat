import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from '@react-three/drei/core';
import {Canvas} from '@react-three/fiber';
import {Suspense, useRef} from 'react';
import {GLBModel} from './models';
import React from 'react';

import LandPath from '../../assets/cotton.glb';

const plants_dictionary = {
  birch: ['./assets/tree-birch.glb', 1 / 800, 0.12],
  maple: ['./assets/tree-maple.glb', 1 / 800, 0.12],
  oak: ['./assets/tree-oak.glb', 1 / 800, 0.12],
  apple: ['./assets/tree-round-apple.glb', 1 / 500, 0.12],
  carnations: ['./assets/carnations.glb', 1 / 500, 0.12],
  tall: ['./assets/tree-tall.glb', 1 / 500, 0.12],
  'birch-tall': ['./assets/tree-birch-tall.glb', 1 / 500, 0.12],
  forest: ['./assets/tree-forest.glb', 1 / 500, 0.12],
  lime: ['./assets/tree-lime.glb', 1 / 500, 0.12],
  little: ['./assets/tree-little.glb', 1 / 500, 0.12],
  simple: ['./assets/tree-simple.glb', 1 / 500, 0.12],
  spruce: ['./assets/tree-spruce.glb', 1 / 500, 0.12],
  cotton: ['./assets/cotton.glb', 1 / 500, 0.12],
  poisonous: ['./assets/flower-poisonous.glb', 1 / 500, 0.12],
  clumb: ['./assets/grass-clumb.glb', 1 / 500, 0.12],
  sea: ['./assets/grass-sea.glb', 1 / 500, 0.12],
  mushroom: ['./assets/mushroom-toadstool.glb', 1 / 500, 0.12],
  'pumpkin-leaves': ['./assets/pumkin-leaves.glb', 1 / 500, 0.12],
  pumpkin: ['./assets/pumkin.glb', 1 / 500, 0.12],
  roses: ['./assets/roses.glb', 1 / 500, 0.12],
  'shrub-flowers': ['./assets/shrub-flowers.glb', 1 / 500, 0.12],
  sunflower: ['./assets/sunflower.glb', 1 / 500, 0.12],
  wheat: ['./assets/wheat-plant.glb', 1 / 500, 0.12],
  tall: ['./assets/tree-tall.glb', 1 / 500, 0.13],
};

const plant_pos_dictionary = {
  '1': [-1, 0, -1],
  '2': [-1, 0, 0],
  '3': [-1, 0, 1],
  '4': [0, 0, -1],
  '5': [0, 0, 0],
  '6': [0, 0, 1],
  '7': [1, 0, -1],
  '8': [1, 0, 0],
  '9': [1, 0, 1],
};

const PLOT_WIDTH = 3;

const Terrain = () => {
  const terrainArray = new Array(PLOT_WIDTH * PLOT_WIDTH);

  const initializeTerrain = () => {
    // Initialize terrain...
    for (let i = 0; i < PLOT_WIDTH; i++) {
      for (let j = 0; j < PLOT_WIDTH; j++) {
        const position = [i, 0, j];
        terrainArray[i * PLOT_WIDTH + j] = getLand(position);
        console.log(position);
      }
    }
  };

  const getTree = (key, pos) => {
    // Get tree...
  };

  const getLand = position => {
    // Get land...
    return (
      <group>
        {/* Render land... */}
        <GLBModel modelPath={LandPath} scale={1} position={position} />
      </group>
    );
  };

  initializeTerrain();

  return (
    <>
      {terrainArray.map((terrain, index) => {
        console.log(terrain);
        return <group key={index}>{terrain}</group>;
      })}
    </>
  );
};

const Camera = () => {
  const cameraRef = useRef();
  const controlsRef = useRef();

  return (
    <>
      <orthographicCamera
        ref={cameraRef}
        makeDefault
        near={0.01}
        far={1000}
        position={[100, 100, 100]}
      />
      <OrbitControls ref={controlsRef} args={[cameraRef.current]} />
    </>
  );
};

const Land = () => {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        fov={110}
        zoom={1}
        near={0.01}
        far={1000}
        position={[10, 0, 100]}
      />
      <ambientLight />
      <directionalLight
        color={0xf9e30e}
        intensity={5}
        position={[3, 7, 1]}
        castShadow
      />
      <Suspense fallback={null}>
        {/* <Camera /> */}
        {/* <Terrain /> */}
        <GLBModel modelPath={LandPath} scale={1} position={[0, 10, 0]} />
        <GLBModel modelPath={LandPath} scale={1} position={[0, 0, 1]} />
        {/* <GLBModel modelPath={LandPath} scale={1} position={[0, 0, 2]} /> */}
        {/* <GLBModel modelPath={LandPath} scale={1} position={position} /> */}
      </Suspense>
      <hemisphereLight
        skyColor={0x0000ff}
        groundColor={0x00ff00}
        intensity={0.6}
      />
    </Canvas>
  );
};

export default Land;
