import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;