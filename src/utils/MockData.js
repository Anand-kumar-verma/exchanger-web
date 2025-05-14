import { FaUserAlt, FaUsers, FaUsersCog, FaWallet } from "react-icons/fa";

export const sidebarList = [
  {
    id: 1,
    route: '/admin/dashboard',
    icons: FaUserAlt,
    title: 'Dashboard',
    isActive: true
  },
  {
    id: 2,
    icons: FaUsersCog,
    title: 'Users Manager',
    route: null,
    isActive: false,
    children: [
      {
        id: 1,
        route: '/admin/pending-user-list',
        title: 'Pending User List',
        isActive: true
      },
      {
        id: 2,
        route: '/admin/user-list',
        title: 'Users List',
        isActive: false
      },
      {
        id: 3,
        route: '/admin/kyc-list',
        title: 'KYC List',
        isActive: false
      },
      {
        id: 4,
        route: '/admin/block-user',
        isActive: false,
        title: 'Block User',
      },
      {
        id: 5,
        route: "/admin/account-close-list",
        isActive: false,
        title: 'Account Close List',
      },
      {
        id: 6,
        route: "/admin/secret pin List",
        isActive: false,
        title: 'Secret Pin List',
      },
      {
        id: 7,
        route: "/admin/upper-bank-list",
        isActive: false,
        title: 'Upper Bank List',
      },
    ],
  },
  {
    id: 3,
    icons: FaWallet,
    title: 'Coin Wallet',
    route: '/admin/credit-wallet',
    children: [
      {
        id: 1,
        route: '/admin/credit-wallet',
        isActive: true,
        title: 'Credit Wallet',
      },
      {
        id: 2,
        route: '/admin/debit-wallet',
        isActive: false,
        title: 'Debit Wallet',
      },
      {
        id: 3,
        route: '/admin/cr-dr-list',
        isActive: false,
        title: 'Cr Dr Log',
      },
      {
        id: 4,
        route: '/admin/user-wallet-address',
        isActive: false,
        title: 'User Wallet Address',
      },
      {
        id: 5,
        route: "/admin/withdrawar-report",
        isActive: false,
        title: 'Withdrawal Report',
      },
      {
        id: 6,
        route: "/admin/transfer-report",
        isActive: false,
        title: 'Transfer Report',
      },

    ],
  },

  {
    id: 4,
    icons: FaWallet,
    title: 'Trade Master',
    isActive: false,
    route: null,
    children: [
      {
        id: 1,
        route: '/admin/buy-coin',
        isActive: true,
        title: 'Buy Coin',
      },
      {
        id: 2,
        route: '/admin/sell-coin',
        isActive: false,
        title: 'Sell Coin',
      },
      {
        id: 3,
        route: '/admin/trade-history',
        isActive: false,
        title: 'Trade History',
      },
      {
        id: 4,
        route: '/admin/open-orders',
        isActive: false,
        title: 'Open Orders',
      },
      {
        id: 5,
        route: "/admin/closed-orders",
        isActive: false,
        title: 'Closed Orders',
      },
      {
        id: 6,
        route: "/admin/sell-order-closed-history",
        isActive: false,
        title: 'Sell Order Closed History',
      },
      {
        id: 7,
        route: "/admin/buy-order-closed-hostory",
        isActive: false,
        title: 'Buy Order Closed History',
      },

    ],
  },
  {
    id: 5,
    icons: FaWallet,
    title: 'Deposits',
    isActive: false,
    route: null,
    children: [
      {
        id: 1,
        route: '/admin/all-connected-address',
        title: 'All Connected Address',
        isActive: true
      },
      {
        id: 2,
        route: '/admin/deposited-report',
        title: 'Deposited Report',
        isActive: false
      },
    ]
  },
  {
    id: 6,
    icons: FaWallet,
    title: 'Coin Management',
    route: null,
    isActive: false,
    children: [
      {
        id: 1,
        route: '/admin/add-coin',
        isActive: true,
        title: 'Add Coin',
      },
      {
        id: 2,
        route: '/admin/coin-list',
        isActive: false,
        title: 'Coin List',
      },
      {
        id: 3,
        route: '/admin/active-coin-list',
        isActive: false,
        title: 'Active Coin List',
      },
      {
        id: 4,
        route: '/admin/coin-expert-reviews',
        isActive: false,
        title: 'Coin Expert Reviews',
      },
      {
        id: 5,
        route: "/admin/pair-master",
        isActive: false,
        title: 'Pair Master',
      },
      {
        id: 6,
        route: "/admin/coin-pair-setting",
        isActive: false,
        title: 'Coin Pair Settings',
      },
      {
        id: 7,
        route: "/admin/coin-pair-setting-list",
        isActive: false,
        title: 'COIN Pair Settings List',
      },
      {
        id: 8,
        route: "/admin/trading-capping",
        isActive: false,
        title: 'Trading Capping',
      },
      {
        id: 9,
        route: "/admin/coin-rate-updation-setting",
        isActive: false,
        title: 'Coin Rate Updation Settings',
      },

      {
        id: 10,
        route: "/admin/coin-sms",
        isActive: false,
        title: ' Coin SMS',
      },
      {
        id: 11,
        route: "/admin/withdrawal-settings",
        isActive: false,
        title: 'Withdrawal Settings',
      },

    ],
  },

  {
    id: 7,
    icons: FaWallet,
    title: 'Email Module',
    route: null,
    children: [
      {
        id: 1,
        route: '/admin/promotional-email',
        isActive: true,
        title: 'Promotional Email',
      },
      {
        id: 2,
        route: '/admin/email-template',
        isActive: false,
        title: 'Email Template',
      },
      {
        id: 3,
        route: '/admin/image-upload',
        isActive: false,
        title: 'Image Upload',
      },
      {
        id: 4,
        route: '/admin/email-accounts',
        isActive: false,
        title: 'Email Accounts',
      },
      {
        id: 5,
        route: "/admin/email-bulk-upload",
        isActive: false,
        title: 'Email Bulk Upload',
      },
    ]
  },
  {
    id: 8,
    icons: FaUsers,
    title: 'Admin Users',
    route: null,
    isActive: false,
    children: [
      {
        id: 1,
        route: '/admin/my-profile',
        isActive: true,
        title: 'My Profile',
      },
      {
        id: 2,
        route: '/admin/add-new-employee',
        isActive: false,
        title: 'Add New Employee',
      },
      {
        id: 3,
        route: '/admin/employee-list',
        isActive: false,
        title: 'Employee List',
      },
      {
        id: 4,
        route: '/admin/add-role',
        isActive: false,
        title: 'Add Role',
      },
      {
        id: 5,
        route: "/admin/admin-login-log",
        isActive: false,
        title: 'Admin Login Log',
      },
      {
        id: 5,
        route: "/admin/role-list",
        isActive: false,
        title: 'Role List',
      },
    ]
  },
  {
    id: 9,
    icons: FaUsers,
    title: 'CMS Master',
    route: null,
    isActive: false,
    children: [
      {
        id: 1,
        route: '/admin/system-settings',
        isActive: true,
        title: 'System Settings',
      },
      {
        id: 2,
        route: '/admin/trade-bot-settings',
        isActive: false,
        title: 'Trade Bot Settings',
      },
      {
        id: 3,
        route: '/admin/functional-settings',
        isActive: false,
        title: 'Functional Settings',
      },
    ]
  },

  {
    id: 10,
    icons: FaUsers,
    title: 'System Settings',
    route: null,
    isActive: false,
    children: [
      {
        id: 1,
        route: '/admin/trade-bot-settings',
        isActive: true,
        title: 'Trade Bot Settings',
      },
      {
        id: 2,
        route: '/admin/functional-settings',
        isActive: false,
        title: 'Functional Settings',
      },

    ]
  },
  {
    id: 11,
    icons: FaUsers,
    title: 'Lead Management',
    route: null,
    isActive: false,
    children: [
      {
        id: 1,
        route: '/admin/enquiry',
        title: 'Enquiry',
        isActive: true
      },


    ]
  }

];



