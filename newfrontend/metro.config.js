// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {};

// // module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// // const {getDefaultConfig} = require('expo/metro-config');

// const defaultConfig = getDefaultConfig(__dirname);

// module.exports = {
//   resolver: {
//     ...defaultConfig.resolver,
//     assetExts: [...defaultConfig.resolver.assetExts, 'glb', 'gltf'],
//   },
// };

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const sourceExtsAdd = ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'];
const assetExtsAdd = ['glb', 'gltf', 'mtl', 'obj', 'png', 'jpg'];

const {
  resolver: {sourceExts, assetExts},
} = getDefaultConfig(__dirname);

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'],
    assetExts: ['glb', 'gltf', 'png', 'jpg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
