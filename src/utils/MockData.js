import { FaUserAlt, FaUsers, FaUsersCog, FaWallet } from "react-icons/fa";

export const sidebarList = [
  {
    id: 1,
    route: '/admin/dashboard',
    icons: <FaUserAlt />,
    title: 'Dashboard',
  },
  {
    id: 2,
    icons: <FaUsersCog className="text-yellow-300" />,
    title: 'Users Manager',
    route: '/admin/pending-user-list',
    children: [
      {
        id: 1,
        route: '/admin/pending-user-list',
        title: 'Pending User List',
      },
      {
        id: 2,
        route: '/admin/user-list',
        title: 'Users List',
      },
      {
        id: 3,
        route: '/admin/kyc-list',
        title: 'KYC List',
      },
      {
        id: 4,
        route: '/admin/block-user',
        title: 'Block User',
      },
      {
        id: 5,
        route: "/admin/account-close-list",
        title: 'Account Close List',
      },
      {
        id: 6,
        route: "/admin/secret pin List",
        title: 'Secret Pin List',
      },
      {
        id: 7,
        route: "/admin/upper-bank-list",
        title: 'Upper Bank List',
      },
    ],
  },
  {
    id: 3,
    icons: <FaWallet className="text-yellow-300" />,
    title: 'Coin Wallet',
    route: '/admin/credit-wallet',
    children: [
      {
        id: 1,
        route: '/admin/credit-wallet',
        title: 'Credit Wallet',
      },
      {
        id: 2,
        route: '/admin/debit-wallet',
        title: 'Debit Wallet',
      },
      {
        id: 3,
        route: '/admin/cr-dr-list',
        title: 'Cr Dr Log',
      },
      {
        id: 4,
        route: '/admin/user-wallet-address',
        title: 'User Wallet Address',
      },
      {
        id: 5,
        route: "/admin/withdrawar-report",
        title: 'Withdrawal Report',
      },
      {
        id: 6,
        route: "/admin/transfer-report",
        title: 'Transfer Report',
      },

    ],
  },

  {
    id: 4,
    icons: <FaWallet className="text-yellow-300" />,
    title: 'Trade Master',
    route: '/admin/buy-coin',
    children: [
      {
        id: 1,
        route: '/admin/buy-coin',
        title: 'Buy Coin',
      },
      {
        id: 2,
        route: '/admin/sell-coin',
        title: 'Sell Coin',
      },
      {
        id: 3,
        route: '/admin/trade-history',
        title: 'Trade History',
      },
      {
        id: 4,
        route: '/admin/open-orders',
        title: 'Open Orders',
      },
      {
        id: 5,
        route: "/admin/closed-orders",
        title: 'Closed Orders',
      },
      {
        id: 6,
        route: "/admin/sell-order-closed-history",
        title: 'Sell Order Closed History',
      },
      {
        id: 7,
        route: "/admin/buy-order-closed-hostory",
        title: 'Buy Order Closed History',
      },

    ],
  },
  {
    id: 5,
    icons: <FaWallet className="text-yellow-300" />,
    title: 'Deposits',
    route: '/admin/all-connected-address',
    children: [
      {
        id: 1,
        route: '/admin/all-connected-address',
        title: 'All Connected Address',
      },
      {
        id: 2,
        route: '/admin/deposited-report',
        title: 'Deposited Report',
      },
    ]
  },
  {
    id: 6,
    icons: <FaWallet className="text-yellow-300" />,
    title: 'Coin Management',
    route: '/admin/add-coin',
    children: [
      {
        id: 1,
        route: '/admin/add-coin',
        title: 'Add Coin',
      },
      {
        id: 2,
        route: '/admin/coin-list',
        title: 'Coin List',
      },
      {
        id: 3,
        route: '/admin/active-coin-list',
        title: 'Active Coin List',
      },
      {
        id: 4,
        route: '/admin/coin-expert-reviews',
        title: 'Coin Expert Reviews',
      },
      {
        id: 5,
        route: "/admin/pair-master",
        title: 'Pair Master',
      },
      {
        id: 6,
        route: "/admin/coin-pair-setting",
        title: 'Coin Pair Settings',
      },
      {
        id: 7,
        route: "/admin/coin-pair-setting-list",
        title: 'COIN Pair Settings List',
      },
      {
        id: 8,
        route: "/admin/trading-capping",
        title: 'Trading Capping',
      },
      {
        id: 9,
        route: "/admin/coin-rate-updation-setting",
        title: 'Coin Rate Updation Settings',
      },

      {
        id: 10,
        route: "/admin/coin-sms",
        title: ' Coin SMS',
      },
      {
        id: 11,
        route: "/admin/withdrawal-settings",
        title: 'Withdrawal Settings',
      },

    ],
  },

  {
    id: 7,
    icons: <FaWallet className="text-yellow-300" />,
    title: 'Email Module',
    route: '/admin/promotional-email',
    children: [
      {
        id: 1,
        route: '/admin/promotional-email',
        title: 'Promotional Email',
      },
      {
        id: 2,
        route: '/admin/email-template',
        title: 'Email Template',
      },
      {
        id: 3,
        route: '/admin/image-upload',
        title: 'Image Upload',
      },
      {
        id: 4,
        route: '/admin/email-accounts',
        title: 'Email Accounts',
      },
      {
        id: 5,
        route: "/admin/email-bulk-upload",
        title: 'Email Bulk Upload',
      },
    ]
  },
  {
    id: 8,
    icons: <FaUsers  className="text-yellow-300" />,
    title: 'Admin Users',
    route: '/admin/my-profile',
    children: [
      {
        id: 1,
        route: '/admin/my-profile',
        title: 'My Profile',
      },
      {
        id: 2,
        route: '/admin/add-new-employee',
        title: 'Add New Employee',
      },
      {
        id: 3,
        route: '/admin/employee-list',
        title: 'Employee List',
      },
      {
        id: 4,
        route: '/admin/add-role',
        title: 'Add Role',
      },
      {
        id: 5,
        route: "/admin/admin-login-log",
        title: 'Admin Login Log',
      },
      {
        id: 5,
        route: "/admin/role-list",
        title: 'Role List',
      },
    ]
  }

];



