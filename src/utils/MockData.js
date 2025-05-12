import { FaUserAlt, FaUsersCog, FaWallet } from "react-icons/fa";

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
        route: "/admin/coin-pair-settings",
        title: 'Coin Pair Settings',
      },
       {
        id: 7,
        route: "/admin/coin-pair-settings-list",
        title: 'COIN Pair Settings List',
      },
      {
        id: 8,
        route: "/admin/trading-capping",
        title: 'Trading Capping',
      },
      {
        id: 9,
        route: "/admin/coin-rate-updation-settings",
        title: 'Coin Rate Updation Settings',
      },
      
    ],
  },
];

 