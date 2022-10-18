import {
  DashboardOutlined, ShoppingOutlined, ShoppingCartOutlined, UserOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'home',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: 'sidenav.dashboard',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'catalogue',
        path: `${APP_PREFIX_PATH}/сatalogue`,
        title: 'sidenav.сatalogue',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'catalogue-products',
            path: `${APP_PREFIX_PATH}/catalogue/products`,
            title: 'sidenav.сatalogue.products',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'catalogue-categories',
            path: `${APP_PREFIX_PATH}/catalogue/categories`,
            title: 'sidenav.catalogue.categories',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'catalogue-collections',
            path: `${APP_PREFIX_PATH}/catalogue/collections`,
            title: 'sidenav.catalogue.collections',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'catalogue-combo',
            path: `${APP_PREFIX_PATH}/catalogue/combo`,
            title: 'sidenav.catalogue.combo',
            breadcrumb: true,
            submenu: []
          },
        ]
      },
      {
        key: 'orders',
        path: `${APP_PREFIX_PATH}/orders`,
        title: 'sidenav.orders',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'clients',
        path: `${APP_PREFIX_PATH}/clients`,
        title: 'sidenav.clients',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'clients-list',
            path: `${APP_PREFIX_PATH}/clients/list`,
            title: 'sidenav.clients.list',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'clients-groups',
            path: `${APP_PREFIX_PATH}/clients/groups`,
            title: 'sidenav.clients.groups',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/banners`,
        title: 'sidenav.banners',
        //TODO
        // icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'promocodes',
        path: `${APP_PREFIX_PATH}/promocodes`,
        title: 'sidenav.promocodes',
        //TODO
        // icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  }]


const navigationConfig = [
  ...mainNavTree
]

export default navigationConfig;
