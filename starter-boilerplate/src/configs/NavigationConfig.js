import {
  DashboardOutlined, ShoppingOutlined, ShoppingCartOutlined, UserOutlined,
  GiftOutlined, PictureOutlined, ShopOutlined, MailOutlined, TeamOutlined,
  MobileOutlined, SettingOutlined, FileTextOutlined
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
            path: `${APP_PREFIX_PATH}/client-list`,
            title: 'sidenav.clients.list',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'clients-groups',
            path: `${APP_PREFIX_PATH}/clients-groups`,
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
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'promocodes',
        path: `${APP_PREFIX_PATH}/promocodes`,
        title: 'sidenav.promocodes',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'offline-points',
        path: `${APP_PREFIX_PATH}/offline-points`,
        title: 'sidenav.offline-points',
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'offline-points-addresses',
            path: `${APP_PREFIX_PATH}/offline-points/addresses`,
            title: 'sidenav.offline-points.addresses',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'offline-points-geozones',
            path: `${APP_PREFIX_PATH}/offline-points/geozones`,
            title: 'sidenav.offline-points.geozones',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'staff',
        path: `${APP_PREFIX_PATH}/staff`,
        title: 'sidenav.staff',
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'mailing',
        path: `${APP_PREFIX_PATH}/mailing`,
        title: 'sidenav.mailing',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  }]

const systemNavTree = [
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'system',
    breadcrumb: false,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/settings`,
        title: 'sidenav.settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'mobile-app',
        path: `${APP_PREFIX_PATH}/mobile-app`,
        title: 'sidenav.mobile-app',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/logs`,
        title: 'sidenav.logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  }]


const navigationConfig = [
  ...mainNavTree,
  ...systemNavTree
]

export default navigationConfig;
