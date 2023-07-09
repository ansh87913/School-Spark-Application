import { Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import { useContext } from "react";
import UserContext from "../../Hooks/UserContext";

const Layout = () => {
  const { user } = useContext(UserContext);
  const location = useLocation().pathname;

  return (
    <div className="body">
      <Header />
      <main className="main">
        {location === "/dash" ? "" : <Nav />}
        {user ? (
          <div className="mt-10 py-4 px-8 bg-slate-50 h-screen w-full overflow-y-auto">
            <Outlet />
          </div>
        ) : (
          // <p>Login to continue</p>
          <Navigate to="/" replace={true} />
        )}
      </main>
    </div>
  );
};

export default Layout;
