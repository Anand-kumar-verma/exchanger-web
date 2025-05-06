

import ManageBank from "../pages/users/profilePages/manageBank";
import NewsAndUpdate from "../pages/users/profilePages/newsAndUpdate";
import NomineeDetails from "../pages/users/profilePages/nomineeDetails";
import OfflineManualKYC from "../pages/users/profilePages/offlineManualKYC";
import OnlineKYC from "../pages/users/profilePages/onlineKYC";
import ProfileInformation from "../pages/users/profilePages/profileInformation";
import SaferyAndSecurity from "../pages/users/profilePages/saferyAndSecurity";
import Security from "../pages/users/profilePages/security";
import Settings from "../pages/users/profilePages/settings";
import VerifyBankDetails from "../pages/users/profilePages/verifyBankDetails";
import About from "../pages/default/about";
import SportTrade from "../pages/default/sportTrade";
import MarginTrade from "../pages/default/marginTrade";
import FutureTrade from "../pages/default/futureTrade";
import Forex from "../pages/default/forex";
import Market from "../pages/default/market";
import Order from "../pages/default/order";
import Transactions from "../pages/default/transactions";
import Assets from "../pages/default/assets";
import Home from "../pages/default/home";
export const userRoutes = [
  
    {
        id:0,
        path: "/about",
        component: <About />,
        navItem: "About",
        isHeader: false,
    },
    {
        id:1,
        path: "/",
        component: <Home />,
        navItem: "Home",
        isHeader: false,
    },
    {
        id: 2,
        path: "/profile-information",
        component: <ProfileInformation />,
        navItem: "Profile Information",
        isHeader: true,
    },
    {
        id: 3,
        path: "/safety-security",
        component: <SaferyAndSecurity />,
        navItem: "Safety Security",
        isHeader: true,
    },
    {
        id: 4,
        path: "/online-kyc",
        component: <OnlineKYC />,
        navItem: "Online KYC",
        isHeader: true,
    },
    {
        id: 5,
        path: "/offline-manual-kyc",
        component: <OfflineManualKYC />,
        navItem: "Offline Manual KYC",
        isHeader: true,
    },
    {
        id: 6,
        path: "/manage-bank",
        component: <ManageBank />,
        navItem: "Manage Bank",
        isHeader: true,
    },
    {
        id: 7,
        path: "/nominee-details",
        component: <NomineeDetails />,
        navItem: "Nominee Details",
        isHeader: true,
    },
    {
        id: 8,
        path: "/settings",
        component: <Settings />,
        navItem: "Settings",
        isHeader: true,
    },
    {
        id: 9,
        path: "/security",
        component: <Security />,
        navItem: "Security",
        isHeader: true,
    },
    {
        id: 10,
        path: "/news-and-update",
        component: <NewsAndUpdate />,
        navItem: "News & Update",
        isHeader: true,
    },
    {
        id: 11,
        path: "/manage-bank/verify-bank-details",
        component: <VerifyBankDetails />,
        navItem: "Verify Bank Details",
        isHeader: false,
    },,
    {
        id: 12,
        path: "/sport-trade",
        component: <SportTrade />,
        navItem: "Sport Trade",
        isHeader: false,
    },
    {
        id: 13,
        path: "/margin-trade",
        component: <MarginTrade />,
        navItem: "Margin Trade",
        isHeader: false,
    },
    {
        id: 14,
        path: "/future-trade",
        component: <FutureTrade />,
        navItem: "Future Trade",
        isHeader: false,
    },
    {
        id: 15,
        path: "/forex",
        component: <Forex />,
        navItem: "Forex",
        isHeader: false,
    },
    {
        id: 16,
        path: "/market",
        component: <Market />,
        navItem: "Market",
        isHeader: false,
    },
    {
        id: 17,
        path: "/order",
        component: <Order />,
        navItem: "Order",
        isHeader: false,
    },
    {
        id: 18,
        path: "/transactions",
        component: <Transactions />,
        navItem: "Transactions",
        isHeader: false,
    },
    {
        id: 19,
        path: "/assets",
        component: <Assets />,
        navItem: "Assets",
        isHeader: false,
    },
]



//  
