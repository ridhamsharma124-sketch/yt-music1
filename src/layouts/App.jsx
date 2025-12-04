import Header from "../components/Header";
import Banner from "../components/Banner";
import SideBar from "../components/SideBar";

import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";

const AppLayout = () => {

    return (
        <>
          <div className="header-bg-image">
        <img src="https://lh3.googleusercontent.com/7WRca0tfLKDnCriR38QVbLWF-dWyT2buMpBMV45KHJr0TlP83GvLT8SRWOjoLip3zUQqbj55dAxGJzwD=w1500-h844-l90-rj" className="w-100" />
      </div>
      <div className="dark main-content container-fluid">
        <Header />
        <div className="row">
          <div className="col-2 ps-0 ">
            <SideBar />
           
          </div>
          <div className="col-10">  
           
         <div class="content ">


             <Home />
         </div>
         <Outlet/>
             

     
          </div>
        </div>
      </div></>
    )
}
export default AppLayout