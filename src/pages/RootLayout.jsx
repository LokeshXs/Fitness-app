import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

const RootLayout = ({inView}) =>{

  return (
   <>
    <NavBar inView={inView} />
    <main>
    <Outlet />
    </main>
   </>
  )
};

export default RootLayout;