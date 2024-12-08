import Footer from "@/ui/Footer";
import NavBar from "@/ui/NavBar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
