
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import UsersLayout from './layout/usersLayout';
import { userRoutes } from './routes/userRoutes';
import { walletRoutes } from './routes/walletRoute';
import WalletLayout from './layout/usersLayout/walletLayout';

function App() {
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
