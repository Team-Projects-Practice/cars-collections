import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />   {/* THIS IS REQUIRED */}
    </>
  );
};

export default MainLayout;
