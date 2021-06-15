import { useState } from "react";
import Drawer from "./Drawer/Drawer";
import Header from "../Header/Header"

const Layout = ({children}) => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  return ( <div>
    <Header openDrawer={() => setDrawerOpen(true)} />
    <Drawer open={drawerOpen} closeDrawer={()=>setDrawerOpen(false)}/>
    <main>
      {children}
    </main>
  </div> );
}
 
export default Layout;