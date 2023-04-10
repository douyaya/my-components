const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: '@alilc',
        extraAssets: [
          {
            package: 'antd',
            version: '5.4.0',
            urls: ['https://unpkg.com/antd@5.4.0/dist/antd.min.js'],
            library: 'antd',
          },
        ],
      },
    ],
  ],
};
