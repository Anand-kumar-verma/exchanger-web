
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import UsersLayout from './layout/usersLayout';
import { userRoutes } from './routes/userRoutes';
import { walletRoutes } from './routes/walletRoute';
import WalletLayout from './layout/usersLayout/walletLayout';
import { useEffect, useState } from 'react';
import loaderGif from "./assets/images/loader.gif"
import AdminLayout from './layout/adminLayout';
import { adminRoutes } from './routes/adminRoutes';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3 seconds ka delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <img src={loaderGif} alt="Loading..." className="w-24 h-24" />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        {userRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <UsersLayout
                  id={route.id}
                  navLink={route.path}
                  navItem={route.navItem}
                  isHeader={route.isHeader}
                  component={route.component}
                />
              }
            />
          );
        })}
        {walletRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <WalletLayout
                  id={route.id}
                  navLink={route.path}
                  navItem={route.navItem}
                  isHeader={route.isHeader}
                  component={route.component}
                />
              }
            />
          );
        })}


{adminRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={`/admin${route.path}`}
              element={
                <AdminLayout
                  id={route.id}
                  navLink={route.path}
                  navItem={route.navItem}
                  isHeader={route.isHeader}
                  component={route.component}
                />
              }
            />
          );
        })}

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
