import Link from "next/link"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"
export const Footer=()=>{
    return (
        <div className=" font-thin flex text-sm justify-between mt-10 p-4 text-[#F9FBFC] bg-[#171828]">
            <div>
                <div><Link href={"/"}> Contact Us</Link></div>
                <div><Link href={"/"}> FAQ</Link></div>
                <div><Link href={"/"}>Terms & Condition </Link></div>
                
            </div>
            <div>
               <h1 className="uppercase">Customer care</h1>
               <div>Timing: 10AM - 6:00PM</div>
               <div>Call:+91123456789</div>
               <div>E-mail: support@fabcloths.co.in</div>
            </div>
            <div>
                <div className="uppercase">Follow us on</div>
                <div className="flex mt-3 justify-between items-center">
                    <BsFacebook className="mr-1"/>
                    <BsInstagram className="mx-1"/>
                    <BsLinkedin className="mx-1"/>
                    <BsYoutube className="mx-1"/>
                    <BsTwitter className="mx-1"/>
                </div>
            </div>
        </div>
    )
}