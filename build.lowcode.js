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
            packages: [
              {
                title: 'antd组件库',
                package: 'antd',
                version: '5.4.0',
                urls: [
                  'https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.7/dayjs.min.js',
                  'https://cdnjs.cloudflare.com/ajax/libs/antd/5.4.0/antd.min.js',
                  'https://cdnjs.cloudflare.com/ajax/libs/antd/5.4.0/reset.min.css',
                ],
                library: 'antd',
              },
            ],
          },
        ],
      },
    ],
  ],
};
