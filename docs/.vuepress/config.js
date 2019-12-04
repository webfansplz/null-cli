module.exports = {
  base: '/null-cli/',
  dest: 'docs/dist',
  port: 3333,
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'null-cli',
      description: 'A command makes you more efficient',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/la-m.png',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3eaf7c',
      },
    ],
  ],
  themeConfig: {
    repo: 'webfansplz/null-cli',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用',
            buttonText: '刷新',
          },
        },
        nav: [
          // {
          //   text: '文档',
          //   link: '/API/install.html'
          // }
        ],
      },
    },
    sidebar: {
      '/guide/': [
        {
          title: '使用指南',
          collapsable: false,
          children: ['install', 'introduce', 'use'],
        },
        {
          title: '命令',
          collapsable: false,
          children: [
            'compress',
            'fetch',
            'youdao',
            'open',
            'search',
            'qrcode',
            'regex',
            'random',
            'create',
            'day',
            'serve',
            'enc',
            'dec',
          ],
        },
      ],
    },
  },
};
