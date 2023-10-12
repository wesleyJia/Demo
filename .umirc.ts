import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Product',
  },
  outputPath: 'views/dist',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/login',
      layout: false,
      component: './Login',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '基础配置',
      path: '/basic',
      routes: [
        {
          name: '组织机构、人员、角色',
          path: '/basic/orgs',
          component: './Basic/Orgs',
        },
        {
          name: '项目分类',
          path: '/basic/classify',
          component: './Basic/Classify',
        },
        {
          name: '应用模式配置',
          path: '/basic/application',
          component: './Basic/Application',
        },
        {
          name: '阶段定义及主体配置',
          path: '/basic/mgt',
          routes: [
            {
              name: '阶段定义',
              path: '/basic/mgt/stage',
              component: './Basic/StageAndConfig/Stage',
            },
            {
              name: '控制节点',
              hideInMenu: true,
              path: '/basic/mgt/stage/:id',
              component: './Basic/StageAndConfig/Stage/Detail',
            },
            {
              name: '模版设置',
              path: '/basic/mgt/template',
              component: './Basic/StageAndConfig/Template',
            },
            {
              name: '新增模版',
              hideInMenu: true,
              path: '/basic/mgt/template/add',
              component: './Basic/StageAndConfig/Template/Add',
            },
            {
              name: 'XX模版',
              hideInMenu: true,
              path: '/basic/mgt/template/detail',
              component: './Basic/StageAndConfig/Template/Detail',
            },
            {
              name: '主体设置',
              path: '/basic/mgt/domain',
              component: './Basic/StageAndConfig/Domain',
            },
          ],
        },
      ],
    },
    {
      name: '项目库管理',
      path: '/product-mgt',
      // component: './ProductMgt',
      routes: [
        {
          name: '部门项目库',
          path: '/product-mgt/department',
          component: './ProductMgt/Department',
        },
        {
          name: '财政项目库',
          path: '/product-mgt/accounting',
          component: './ProductMgt/Accounting',
        },
        {
          name: '项目配置',
          hideInMenu: true,
          path: '/product-mgt/detail/:id',
          component: './ProductMgt/Detail',
        },
      ],
    },
    {
      name: '指标管理',
      path: '/kpi',
      component: './Kpi',
    },
    {
      name: '项目业务管理',
      path: '/business-mgt',
      routes: [
        // {
        //   name: '总体呈现',
        //   path: '/business-mgt/dashboard',
        //   component: './BusinessMgt/Dashboard',
        // },
        {
          name: '项目执行管理',
          path: '/business-mgt/do-mgt',
          component: './BusinessMgt/DoMgt',
        },
        {
          name: '立项及评审',
          hideInMenu: true,
          path: '/business-mgt/approval-preview',
          component: './BusinessMgt/DoMgt/ApprovalAndPreview',
        },
        {
          name: '采购计划登记',
          hideInMenu: true,
          path: '/business-mgt/purchase',
          component: './BusinessMgt/DoMgt/Purchase',
        },
      ],
    },
    {
      name: '其他注意事项',
      path: '/other',
      component: './Other',
    },
    {
      name: '资料管理',
      path: '/files',
      component: './Files',
    },
    {
      name: '数据交换规则配置',
      path: '/data-rules',
      component: './Basic/DateRules',
    },
  ],
  npmClient: 'yarn',
});
