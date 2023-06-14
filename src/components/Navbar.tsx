import Link from "next/link";
import { Addtocart, NotificationIcon, ProfileIcon } from "./CustomIcons";
import Searchbar from "./Searchbar";
import Image from "next/image";



const Navbar=()=>{

    return(
    
       <div className=" items-center  px-8 flex justify-between h-[120px] text-[#F9FBFC] bg-[#171828]">
        
        <div className="xl:w-[15%] md:w-[17%] sm:w-[30%] w-[30%] ">
        <Link href={"/"}>
            <Image src={"/images/logo.png"} width={100} height={100} className="h-[100%] w-[100%]"   alt={""}/>
            
        </Link>
        </div>
        

        
        <Searchbar/>
        
        <Addtocart cartCount={1} / >

        <NotificationIcon notificationCount={2}/>

        <ProfileIcon/>
       </div>
       
    );
}

export default Navbar;