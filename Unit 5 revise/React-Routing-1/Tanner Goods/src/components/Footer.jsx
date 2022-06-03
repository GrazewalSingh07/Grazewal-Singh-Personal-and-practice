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
        <div style={{display:"flex"}}>
            <div>
                <p>TANNER GOODS</p>

                <p>In a world where we are overwhelmed by products made to break down or go out style, we aim to go against that grain.</p>
                <Link to="/About">About Us</Link>
            </div>
            <div>
            <p>SUPPORT</p> 
                <ul>
              
                <p>Contact Us</p>
                <p>Shipping</p>
                <p>Returns & Exchanges</p>
                <p>Replacements & Repairs</p>
                <p>Careers</p>
                </ul>
            </div>
            <div>
                <p>SHOP</p>
                <ul>
                    <p>Mazama</p>
                    <p>Best Sellers</p>
                    <p>Neew Arrivals</p>
                    <p>Wallets</p>
                    <p>Belts</p>
                    <p>Bags</p>
                    <p>Final Sale</p>
                </ul>
            </div>

            <div>
                <p>STAY IN THE LOOP</p>
                <p>
                Subscribe to receive exclusive offers and be the first to know of new product releases.
                </p>
                <div style={{display:"flex"}}>
                <input type="text" placeholder="Enter your email" onChange={()=>setemailstate(true)}  style={{border:"none", borderBottom:"2px solid black", outline:"none", width:"200px"}}/>
                 <div style={{marginLeft:"-50px"}}> {eamilstate? <p>Subscribe</p>:<AiOutlineMail/>}</div>
                </div>
                <div>
                <FaInstagram className="icons"/>
                <FaFacebook className="icons"/>
                </div>
            </div>
            
        </div>
        <div>
            <FaAmazon/>
            <GrAmex/>
            <SiGooglepay/>
             <RiVisaFill/>
            <FaCcMastercard/>
            <BsPaypal/>
            {/* <IoLogoVenmo/> */}
        </div>
        </>
    )
}