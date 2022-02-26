export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: '营业数据',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'statistics',
      displayName: '订单管理',
      meta: {
        icon: 'vuestic-iconset-statistics',
      },
      disabled: true,
      // children: [
      //   {
      //     name: 'charts',
      //     displayName: 'menu.charts',
      //   },
      //   {
      //     name: 'progress-bars',
      //     displayName: 'menu.progressBars',
      //   },
      // ],
    },
    {
      name: 'forms',
      displayName: '菜品管理',
      meta: {
        icon: 'vuestic-iconset-forms',
      },
      disabled: true,
      children: [
        {
          name: 'form-elements',
          displayName: '推荐畅销菜',
        },
        {
          name: 'medium-editor',
          displayName: '热菜',
        },
        {
          name: 'medium-editor',
          displayName: '凉菜',
        },
        {
          name: 'medium-editor',
          displayName: '小吃',
        },
        {
          name: 'medium-editor',
          displayName: '饮品',
        },
      ],
    },
    {
      name: 'tables',
      displayName: '推送公告',
      meta: {
        icon: 'vuestic-iconset-tables',
      },
      // children: [
      //   {
      //     name: 'markup',
      //     displayName: 'menu.markupTables',
      //   },
      //   {
      //     name: 'data',
      //     displayName: 'menu.dataTables',
      //   },
      // ],
    },
    {
      name: 'pages',
      displayName: '人事管理',
      meta: {
        icon: 'vuestic-iconset-ui-elements',
      },
      disabled: true,
      // children: [
      //   {
      //     name: 'buttons',
      //     displayName: 'menu.buttons',
      //   },
      //   {
      //     name: 'cards',
      //     displayName: 'menu.cards',
      //   },
      //   {
      //     name: 'chat',
      //     displayName: 'menu.chat',
      //   },
      //   {
      //     name: 'chips',
      //     displayName: 'menu.chips',
      //   },
      //   {
      //     name: 'collapses',
      //     displayName: 'menu.collapses',
      //   },
      //   {
      //     name: 'colors',
      //     displayName: 'menu.colors',
      //   },
      //   // {
      //   //   name: 'color-pickers',
      //   //   displayName: 'menu.colorPickers',
      //   // },
      //   {
      //     name: 'file-upload',
      //     displayName: 'menu.fileUpload',
      //   },
      //   {
      //     name: 'grid',
      //     displayName: 'menu.grid',
      //   },
      //   {
      //     name: 'icon-sets',
      //     displayName: 'menu.icons',
      //     children: [
      //       {
      //         displayName: 'concrete',
      //         name: 'icon-set',
      //       },
      //     ],
      //   },
      //   {
      //     name: 'lists',
      //     displayName: 'menu.lists',
      //   },
      //   {
      //     name: 'modals',
      //     displayName: 'menu.modals',
      //   },
      //   {
      //     name: 'notifications',
      //     displayName: 'menu.notifications',
      //   },
      //   {
      //     name: 'popovers',
      //     displayName: 'menu.popovers',
      //   },
      //   {
      //     name: 'rating',
      //     displayName: 'menu.rating',
      //   },
      //   {
      //     name: 'sliders',
      //     displayName: 'menu.sliders',
      //   },
      //   {
      //     name: 'spacing',
      //     displayName: 'menu.spacing',
      //   },
      //   {
      //     name: 'spinners',
      //     displayName: 'menu.spinners',
      //   },
      //   {
      //     name: 'tabs',
      //     displayName: 'menu.tabs',
      //   },
      //   {
      //     name: 'timelines',
      //     displayName: 'menu.timelines',
      //   },
      //   {
      //     name: 'tree-view',
      //     displayName: 'menu.treeView',
      //   },
      //   {
      //     name: 'typography',
      //     displayName: 'menu.typography',
      //   },
      // ],
    },
    // {
    //   name: 'maps',
    //   displayName: 'menu.maps',
    //   meta: {
    //     icon: 'vuestic-iconset-maps',
    //   },
    //   disabled: true,
    //   children: [
    //     {
    //       name: 'google-maps',
    //       displayName: 'menu.google-maps',
    //     },
    //     {
    //       name: 'yandex-maps',
    //       displayName: 'menu.yandex-maps',
    //     },
    //     {
    //       name: 'leaflet-maps',
    //       displayName: 'menu.leaflet-maps',
    //     },
    //     {
    //       name: 'bubble-maps',
    //       displayName: 'menu.bubble-maps',
    //     },
    //     {
    //       name: 'line-maps',
    //       displayName: 'menu.line-maps',
    //     },
    //   ],
    // },
    // {
    //   name: 'pages',
    //   displayName: 'menu.pages',
    //   meta: {
    //     icon: 'vuestic-iconset-files',
    //   },
    //   disabled: true,
    //   children: [
    //     {
    //       name: 'login',
    //       displayName: 'menu.login-singup',
    //     },
    //     {
    //       name: '404-pages',
    //       displayName: 'menu.404-pages',
    //     },
    //     {
    //       name: 'faq',
    //       displayName: 'menu.faq',
    //     },
    //   ],
    // },
  ],
}
