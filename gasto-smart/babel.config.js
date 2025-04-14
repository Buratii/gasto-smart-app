module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './src',
            '@store': './src/store',
            '@components': './src/components',
            '@service': './src/service',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};