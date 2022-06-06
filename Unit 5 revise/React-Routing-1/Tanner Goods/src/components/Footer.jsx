import { Link } from "react-router-dom"
import {AiOutlineMail} from "react-icons/ai"
import { useState } from "react"
import {FaInstagram,FaFacebook,FaCcMastercard} from "react-icons/fa"
import { FaAmazon} from "react-icons/fa"
import {GrAmex} from "react-icons/gr"
import {SiGooglepay} from "react-icons/si"
import {RiVisaFill} from "react-icons/ri"
import {BsPaypal} from "react-icons/bs"
// import {IoLogoVenmo} from "react-icons/io"


export const Footer=()=>{
    const [eamilstate,setemailstate]=useState(false)
    return(<>
        <div style={{display:"flex", margin:"2rem"}}>
            <div style={{margin:"2rem", width:"400px"}}>
                <p>TANNER GOODS</p>

                <p>In a world where we are overwhelmed by products made to break down or go out style, we aim to go against that grain.</p>
                <Link to="/About">About Us</Link>
            </div>
            <div style={{margin:"2rem", width:"400px"}}>
            
                <ul>
                <p><b>SUPPORT</b></p> 
                <p>Contact Us</p>
                <p>Shipping</p>
                <p>Returns & Exchanges</p>
                <p>Replacements & Repairs</p>
                <p>Careers</p>
                </ul>
            </div>
            <div style={{margin:"2rem", width:"400px"}}>
                
                <ul>
                    <p><b>SHOP</b></p>
                    <p>Mazama</p>
                    <p>Best Sellers</p>
                    <p>Neew Arrivals</p>
                    <p>Wallets</p>
                    <p>Belts</p>
                    <p>Bags</p>
                    <p>Final Sale</p>
                </ul>
            </div>

            <div style={{margin:"2rem", width:"400px"}}>
                <p><b>STAY IN THE LOOP</b></p>
                <p>
                Subscribe to receive exclusive offers and be the first to know of new product releases.
                </p>
                <div style={{display:"flex"}}>
                <input type="text" placeholder="Enter your email" onChange={()=>setemailstate(true)}  style={{border:"none", borderBottom:"2px solid black", outline:"none", width:"200px"}}/>
                 <div style={{marginLeft:"-50px"}}> {eamilstate? <p>Subscribe</p>:<AiOutlineMail/>}</div>
                </div>
                <div  style={{margin:"1rem", width:"200px"}}>
                <FaInstagram className="icons"/>
                <FaFacebook className="icons"/>
                </div>
            </div>
            
        </div>
        <div  style={{ display:"flex",justifyContent:"space-between", width:"30%",margin:"auto"}}>
            <FaAmazon style={{fontSize:"2rem", margin:"1rem", cursor:"pointer"}}/>
            <GrAmex style={{fontSize:"2rem",margin:"1rem", cursor:"pointer"}}/>
            <SiGooglepay style={{fontSize:"2rem",margin:"1rem", cursor:"pointer"}}/>
             <RiVisaFill style={{fontSize:"2rem",margin:"1rem", cursor:"pointer"}}/>
            <FaCcMastercard style={{fontSize:"1rem",margin:"1rem", cursor:"pointer"}}/>
            <BsPaypal style={{fontSize:"2rem",margin:"1rem", cursor:"pointer"}}/>
            {/* <IoLogoVenmo/> */}
        </div>
        </>
    )
}