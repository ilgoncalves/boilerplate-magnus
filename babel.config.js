const rootImportOpts = {
  root: __dirname,
  rootPathSuffix: './src',
  rootPathPrefix: '~/',
};

module.exports = api => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['babel-plugin-root-import', rootImportOpts],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
