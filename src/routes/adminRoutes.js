import Dashboard from "../pages/admin/dashboard";
import PendingUserList from "../pages/admin/userManagement/pendingUserList";
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

]