import AddNewEmployee from "../pages/admin/adminUsers/addNewEmployee";
import AddRole from "../pages/admin/adminUsers/addRole";
import EmployeeList from "../pages/admin/adminUsers/employeeList";
import MyProfile from "../pages/admin/adminUsers/myProfile";
import ActiveCoinList from "../pages/admin/coinManagement/activeCoinList";
import AddCoin from "../pages/admin/coinManagement/addCoin";
import CoinExpertReviews from "../pages/admin/coinManagement/coinExpertReviews";
import CoinList from "../pages/admin/coinManagement/coinList";
import CoinPairSetting from "../pages/admin/coinManagement/coinPairSetting";
import CoinPairSettingList from "../pages/admin/coinManagement/coinPairSettingList";
import CoinRateUpdationSetting from "../pages/admin/coinManagement/coinRateUpdationSetting";
import PairMaster from "../pages/admin/coinManagement/pairMaster";
import TradingCapping from "../pages/admin/coinManagement/tradingCapping";
import Dashboard from "../pages/admin/dashboard";
import AllConnectedAddress from "../pages/admin/deposits/allConnectedAddress";
import DepositedReport from "../pages/admin/deposits/depositedReport";
import EmailAccounts from "../pages/admin/emailModule/EmailAccounts";
import EmailTemplate from "../pages/admin/emailModule/emailTemplate";
import ImageUpload from "../pages/admin/emailModule/imageUpload";
import PromotionalEmail from "../pages/admin/emailModule/promotionalEmail";
import Enquiry from "../pages/admin/leadManagement/enquiry";
import TradeBotSettings from "../pages/admin/systemSetting/tradeBotSettings";
import BuyCoin from "../pages/admin/tradeMaster/buyCoin";
import BuyOrderClosedHistory from "../pages/admin/tradeMaster/buyOrderClosedHistory";
import ClosedOrders from "../pages/admin/tradeMaster/closedOrders";
import OpenOrders from "../pages/admin/tradeMaster/openOrders";
import SellCoin from "../pages/admin/tradeMaster/sellCoin";
import SellOrderClosedHistory from "../pages/admin/tradeMaster/sellOrderClosedHistory";
import TradeHistory from "../pages/admin/tradeMaster/tradeHistory";
import AccountCloseList from "../pages/admin/userManagement/accountCloseList";
import BlockUser from "../pages/admin/userManagement/blockedUser";
import KYCList from "../pages/admin/userManagement/kycList";
import PendingUserList from "../pages/admin/userManagement/pendingUserList";
import UserList from "../pages/admin/userManagement/userList";
import CrDrList from "../pages/admin/walletManagement/CrDrList";
import CreditWallet from "../pages/admin/walletManagement/creditWallet";
import DebitWallet from "../pages/admin/walletManagement/debitWallet";
import TransferReport from "../pages/admin/walletManagement/transferReport";
import UserWalletAddress from "../pages/admin/walletManagement/userWalletAddress";
import WithdrawelReport from "../pages/admin/walletManagement/withdrawalReport";
export const adminRoutes = [
    {
        id:1,
        path: "/dashboard",
        component: <Dashboard />,
        navItem: "Dashboard",
        isHeader: false,
    },
    {
        id:2,
        path: "/pending-user-list",
        component: <PendingUserList />,
        navItem: "Pending User List",
        isHeader: false,
    },
    {
        id:3,
        path: "/user-list",
        component: <UserList />,
        navItem: "Pending User List",
        isHeader: false,
    },
     {
        id:4,
        path: "/kyc-list",
        component: <KYCList />,
        navItem: "Pending User List",
        isHeader: false,
    },
     {
        id:5,
        path: "/block-user",
        component: <BlockUser />,
        navItem: "Block User",
        isHeader: false,
    },

     {
        id:6,
        path: "/account-close-list",
        component: <AccountCloseList />,
        navItem: "Account Close List",
        isHeader: false,
    },
     {
        id:7,
        path: "/credit-wallet",
        component: <CreditWallet />,
        navItem: "Credit Wallet",
        isHeader: false,
    },
      {
        id:8,
        path: "/debit-wallet",
        component: <DebitWallet />,
        navItem: "debit Wallet",
        isHeader: false,
    },
    {
        id:9,
        path: "/cr-dr-list",
        component: <CrDrList />,
        navItem: "Cr Dr List",
        isHeader: false,
    },
     {
        id:10,
        path: "/user-wallet-address",
        component: <UserWalletAddress />,
        navItem: "User Wallet Address",
        isHeader: false,
    },
     {
        id:11,
        path: "/withdrawar-report",
        component: <WithdrawelReport />,
        navItem: "Withdrawal Report",
        isHeader: false,
    },
      {
        id:12,
        path: "/transfer-report",
        component: <TransferReport />,
        navItem: "Transfer Report",
        isHeader: false,
    },
     {
        id:13,
        path: "/buy-coin",
        component: <BuyCoin />,
        navItem: "Buy Coin",
        isHeader: false,
    },
     {
        id:14,
        path: "/sell-coin",
        component: <SellCoin />,
        navItem: "Sell Coin",
        isHeader: false,
    },
     {
        id:15,
        path: "/trade-history",
        component: <TradeHistory />,
        navItem: "Trade History",
        isHeader: false,
    },
    {
        id:16,
        path: "/open-orders",
        component: <OpenOrders />,
        navItem: "Open Orders",
        isHeader: false,
    },
    {
        id:17,
        path: "/closed-orders",
        component: <ClosedOrders />,
        navItem: "Closed Orders",
        isHeader: false,
    },
    {
        id:18,
        path: "/sell-order-closed-history",
        component: <SellOrderClosedHistory />,
        navItem: "Sell Order Closed History",
        isHeader: false,
    },
    {
        id:19,
        path: "/buy-order-closed-hostory",
        component: <BuyOrderClosedHistory />,
        navItem: "Buy Order Closed History",
        isHeader: false,
    },
    {
        id:20,
        path: "/all-connected-address",
        component: <AllConnectedAddress />,
        navItem: "All Connected Address",
        isHeader: false,
    },
    {
        id:21,
        path: "/deposited-report",
        component: <DepositedReport />,
        navItem: "Deposited Report",
        isHeader: false,
    },
    {
        id:22,
        path: "/add-coin",
        component: <AddCoin />,
        navItem: "Add Coin",
        isHeader: false,
    },
     {
        id:23,
        path: "/coin-list",
        component: <CoinList />,
        navItem: "Coin List",
        isHeader: false,
    },
     {
        id:24,
        path: "/active-coin-list",
        component: <ActiveCoinList />,
        navItem: "Active Coin List",
        isHeader: false,
    },
    {
        id:25,
        path: "/coin-expert-reviews",
        component: <CoinExpertReviews />,
        navItem: "Coin Expert Reviews",
        isHeader: false,
    },
    {
        id:26,
        path: "/pair-master",
        component: <PairMaster />,
        navItem: "Pair Master",
        isHeader: false,
    },
    {
        id:27,
        path: "/coin-pair-setting",
        component: <CoinPairSetting />,
        navItem: "Coin Pair Setting",
        isHeader: false,
    },
     {
        id:28,
        path: "/coin-pair-setting-list",
        component: <CoinPairSettingList />,
        navItem: "Coin Pair Setting List",
        isHeader: false,
    },
     {
        id:29,
        path: "/trading-capping",
        component: <TradingCapping />,
        navItem: "Trading Capping",
        isHeader: false,
    },
     {
        id:30,
        path: "/coin-rate-updation-setting",
        component: <CoinRateUpdationSetting />,
        navItem: "Coin Rate Updation Setting",
        isHeader: false,
    },
     {
        id:31,
        path: "/promotional-email",
        component: <PromotionalEmail />,
        navItem: "Promotional Email",
        isHeader: false,
    },
    {
        id:32,
        path: "/email-template",
        component: <EmailTemplate />,
        navItem: "Email Template",
        isHeader: false,
    },
    {
        id:33,
        path: "/image-upload",
        component: <ImageUpload />,
        navItem: "Image Upload",
        isHeader: false,
    },
     {
        id:34,
        path: "/email-accounts",
        component: <EmailAccounts />,
        navItem: "Email Accounts",
        isHeader: false,
    },
    {
        id:35,
        path: "/my-profile",
        component: <MyProfile />,
        navItem: "My Profile",
        isHeader: false,
    },
    {
        id:36,
        path: "/add-new-employee",
        component: <AddNewEmployee />,
        navItem: "Add New Employee",
        isHeader: false,
    },
     {
        id:37,
        path: "/employee-list",
        component: <EmployeeList />,
        navItem: "Employee List",
        isHeader: false,
    },
    {
        id:38,
        path: "/add-role",
        component: <AddRole />,
        navItem: "Add Role",
        isHeader: false,
    },
    {
        id:39,
        path: "/trade-bot-settings",
        component: <TradeBotSettings />,
        navItem: "Trade Bot Settings",
        isHeader: false,
    },
     {
        id:40,
        path: "/enquiry",
        component: <Enquiry />,
        navItem: "Enquiry",
        isHeader: false,
    },
    
]




