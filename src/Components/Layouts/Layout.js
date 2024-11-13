import { Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import { useContext } from "react";
import UserContext from "../../Hooks/UserContext";

// Layout of the entire dash/ route
const Layout = () => {
  const { user } = useContext(UserContext);
  const location = useLocation().pathname;

  return (
    <div className="relative flex flex-col bg-amber-50">
      <Header />
      <main className="mt-[3.15rem] flex h-[calc(100vh-3.15rem)] whitespace-nowrap bg-amber-50">
        {location === "/dash" ? "" : <Nav />}
        {user ? (
          <div className="outlet-border z-[1] mt-1 w-full overflow-y-auto bg-amber-50 p-4 text-black dark:bg-amber-50 dark:text-black lg:p-10">
            <Outlet />
          </div>
        ) : (
          <Navigate to="/" replace={true} />
        )}
      </main>
    </div>
  );
};

export default Layout;
