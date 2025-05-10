import Dashboard from "../pages/admin/dashboard";
import BlockUser from "../pages/admin/userManagement/blockedUser";
import KYCList from "../pages/admin/userManagement/kycList";
import PendingUserList from "../pages/admin/userManagement/pendingUserList";
import UserList from "../pages/admin/userManagement/userList";
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

]