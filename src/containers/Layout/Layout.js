import { useState } from "react";
import Drawer from "./Drawer/Drawer";
import Header from "../Header/Header"
import Search from "./Search/Search";
import Footer from "../Footer/Footer";


const Layout = ({children}) => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const search_block = [];
  if(search){
    search_block.push(<Search close={()=>setSearch(false)}/>)
  }
  return ( <div>
    <Header startSearch={()=>setSearch(true)}
      openDrawer={() => setDrawerOpen(true)} />
    {search_block}
    <Drawer open={drawerOpen} closeDrawer={()=>setDrawerOpen(false)}/>
    <main>
      {children}
    </main>
    <Footer/>
  </div> );
}
 
export default Layout;