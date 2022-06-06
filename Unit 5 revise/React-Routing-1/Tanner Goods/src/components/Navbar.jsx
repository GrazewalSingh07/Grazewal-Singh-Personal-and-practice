 
 import {BsBag,BsSearch} from "react-icons/bs"
 import{AiOutlineUser} from "react-icons/ai"
 import 'antd/dist/antd.css';
 import "./Navbar.css"
import { Menu, Dropdown, Button } from 'antd';
 import { useNavigate } from "react-router-dom";
import { Drawer } from "antd"
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const  TannerGoods = (
  <div  className="megadropdown" style={{display:"flex", margin: "1rem 1rem ", justifyContent:"space-around", width:"100%",background:"white"}} >
      <div style={{ margin: "1rem"}}>
          <div>
          <img style={{width:"200px",height:"150px"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leather-goods-tg-1629899667.jpg?crop=1.00xw:0.869xh;0,0.0509xh&resize=980:*" alt="" />
          </div>
      
        <Menu  items={
            [{
                key: '1',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
               
                </a>
                ),
            },
            {
                key: '2',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                {/* <img src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2017/08/Tanner-Card-Wallet-Gear-Patrol-Lead-Full.jpg?crop=0.6706185567010309xw:1xh;center,top&resize=980:*" alt="" /> */}
                </a>
                ),
            },
            {
                key: '3',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    
                </a>
                )
            }]}></Menu>
      </div>
       <div style={{margin: "1rem"}}>
           <div>
           <img style={{width:"200px", height:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIAFHqRUttU6hgd5Ys5W7vo5Sw2vfASl22AdX9BiMmtB2slE8gZyE6-9t5ARU65v8VPw&usqp=CAU" alt="" />
           </div>
       
        <Menu items={
            [{
                key: '1',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                
                </a>
                ),
            },
            {
                key: '2',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
                ),
            },
            {
                key: '3',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
                )
            }]}></Menu>
       </div>
      <div style={{margin: "1rem"}}>
          <div>
          <img style={{width:"200px", height:"150px"}} src="https://d2rg8qz2n54jhj.cloudfront.net/1920/20200512-DSC09786.webp" alt="" />
          </div>
       
        <Menu items={
            [{
                key: '1',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                
                </a>
                ),
            },
            {
                key: '2',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
                ),
            },
            {
                key: '3',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
                )
            }]}></Menu>
      </div>
      <div style={{margin: "1rem"}}>
          <div style={{width:"200px", height:"150px"}}>
              <img style={{width:"200px", height:"150px"}}src="https://m.media-amazon.com/images/I/61tmACBhPML._SX679_.jpg" alt="" />
          </div>
          <Menu items={
        [{
            key: '1',
            label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
           
            </a>
            ),
        },
        {
            key: '2',
            label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
            ),
        },
        {
            key: '3',
            label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
            )
        }]}></Menu>
      </div>
  </div>
       
    
  
);
const  MazamaWares = (
    <div style={{marginTop:"2rem"}}>
            <Menu
      items={[
          {
              key: '1',
              label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Glassware
              </a>
              ),
          },
          {
              key: '2',
              label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                 Table ware
              </a>
              ),
          },
          {
              key: '3',
              label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                  Ceramic Mugs
              </a>
              ),
          },{
            key: '4',
            label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Kitchen Kinves
            </a>
            ),
        },
          ]}
    />
    </div>

  );
  const  FeaturedCollections = (
   <div style={{marginTop:"2rem"}}>
        <Menu
      items={[
          {
              key: '1',
              label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Best Sellers
              </a>
              ),
          },
          {
              key: '2',
              label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                  New Arrivals
              </a>
              ),
          },
          {
              key: '3',
              label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                 Everyday Carry
              </a>
              ),
          },
          {
            key: '4',
            label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
               Apothecary
            </a>
            ),
        },{
            key: '5',
            label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
               Apparel
            </a>
            ),
        },{
            key: '6',
            label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Summer Accessories
            </a>
            ),
        },{
            key: '7',
            label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Lightweight Goods
            </a>
            ),
        },
          ]}
    />
   </div>
  );
  
 
export const Navbar=()=>{
    const navigate=useNavigate()
    const [cartdata]= useContext(AppContext)
     console.log(cartdata)
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('right');
    const showDrawer = () => {
        setVisible(true); 
        
      };
    
      const onClose = () => {
        setVisible(false);
      };

    return  <> <div  style={{display:"flex", justifyContent:"space-evenly", padding:"20px",marginTop:"1rem",border:"1px solid #F5F5F5"}}>
        <div style={{cursor:"pointer"}} onClick={()=>navigate("/")}>
            <img  src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052" alt="" />
        </div>
        <div>
            
            <Dropdown overlay={ TannerGoods} placement="bottom" >
            <Button  type="link" className="btn" >Tanner Goods</Button>
            </Dropdown>
            <Dropdown overlay={MazamaWares} placement="bottom" >
            <Button     type="link" className="btn" >Mazama Wares</Button>
            </Dropdown>
            <Dropdown overlay={FeaturedCollections} placement="bottom" >
            <Button type="link"className="btn" >Featured Collections</Button>
            </Dropdown>
            
            <Button type="link" className="btn">Finale Sale</Button>
   
        </div>
        <div className="rightIcons">

            
            <AiOutlineUser className="icons"/>
            <BsSearch className="icons"/>
            <BsBag className="icons" onClick={showDrawer}/>
            
        </div>
        
    </div>
    <Drawer title="Cart"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}>             
     {cartdata?.map((el)=>(
        <div className="cartprod">
            <div>
                <img src={el.images[0]} alt={el.title} />
            </div>
           <div>
            <p>{el.title}</p>
            <p>{el.price}</p>
           </div>

        </div>
     ))}
  </Drawer>
</>
    
}