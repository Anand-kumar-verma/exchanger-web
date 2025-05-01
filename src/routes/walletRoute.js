
import AssetOverview from "../pages/users/walletPages/assetOverview";
import Deposit from "../pages/users/walletPages/deposit";
import Pending from "../pages/users/walletPages/pending";
export const walletRoutes = [
    {
        id: 0,
        path: "/asset-overview",
        component: <AssetOverview />,
        navItem: "Asset Overview",
        isHeader: false,
    },
    {
        id: 1,
        path: "/pending",
        component: <Pending />,
        navItem: "Pending",
        isHeader: false,
    },
    {
        id: 1,
        path: "/deposit",
        component: <Deposit />,
        navItem: "Deposit",
        isHeader: false,
    },
]


